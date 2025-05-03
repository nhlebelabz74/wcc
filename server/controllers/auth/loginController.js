const jwt = require("jsonwebtoken");
require("dotenv").config();

const { asyncWrapper }= require('../../middleware');
const { Admin, Member, NonMember } = require('../../models');
const { userTypes } = require('../../constants');

// endpoint: /login
const loginController = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  let User, user, userType;

  // check who is logging in
  const isAdmin = await Admin.findOne({ email: email, password: password }).exec(); // admins can't be members or non-members
  const isMember = await Member.findOne({ email: email, password: password }).exec();
  const isNonMember = await NonMember.findOne({ email: email, password: password }).exec();

  if (isAdmin) {
    User = Admin;
    user = isAdmin;
    userType = userTypes.ADMIN;
  }
  else if (isMember) {
    User = Member;
    user = isMember;
    userType = userTypes.MEMBER;
  }
  else if (isNonMember) {
    User = NonMember;
    user = isNonMember;
    userType = userTypes.NON_MEMBER;
  }
  else {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  if (!user)
    return res.status(400).json({ message: 'Invalid credentials' });

  const name = user.name;

  // Generate access token
  const accessToken = jwt.sign(
    { userInfo: { name, email } },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1800s" }
  );

  // Generate refresh token
  const refreshToken = jwt.sign(
    { name, email }, // Include email for validation in refreshController
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  // Update user with refresh token
  await User.updateOne({ email: email }, { refreshToken: refreshToken });

  // Set refresh token cookie
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'None',
    maxAge: 1000 * 60 * 60 * 2 // 2 hours
  });

  // Set access token cookie
  res.cookie("accessToken", accessToken, { 
    httpOnly: true,
    secure: true,
    partitioned: true,
    sameSite: 'None',
    maxAge: 1000 * 60 * 30 // 30 mins
  });

  res.status(200).json({ message: "Logged in successfully", accessToken, userType, name });
});

module.exports = loginController;