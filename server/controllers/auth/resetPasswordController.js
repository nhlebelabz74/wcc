const { VerificationCode, Admin, Member, NonMember } = require('../../models');
const { generateVerificationCode, sendEmail } = require('../../utils');
const { ResetPasswordEmailHTML } = require('../../constants');
const { asyncWrapper } = require('../../middleware');
const jwt = require('jsonwebtoken');

const { AES } = require('crypto-js');
const CryptoJS = require('crypto-js');

// endpoint: /send-reset-password-code
const sendResetPasswordCode = asyncWrapper(async (req, res) => {
  const { email } = req.body;
  const eight_digit_code = Math.floor(10000000 + Math.random() * 90000000).toString(); // Generate a random 8-digit code
  const verificationCode = generateVerificationCode(eight_digit_code); // Generate a JWT token with the code
  
  const decryptedEmail = AES.decrypt(email, process.env.ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);

  const v = await VerificationCode.findOne({ email: decryptedEmail });
  if (v) {
    await VerificationCode.updateOne({ email: decryptedEmail }, { code: verificationCode, verified: false });
  } else {
    await VerificationCode.create({ email: decryptedEmail, code: verificationCode });
  }
  const html = ResetPasswordEmailHTML({ code: eight_digit_code });

  await sendEmail({
    receiver_email: decryptedEmail,
    subject: 'Wits Consulting Club - Reset Password',
    html: html
  });

  return res.status(200).json({
    success: true,
    message: 'Reset password email sent successfully',
  });
});

// endpoint: /reset-password
const resetPassword = asyncWrapper(async (req, res) => {
  const { email, code, password } = req.body; // code is the 8-digit code sent to the user
  
  const decryptedEmail = decodeURIComponent(AES.decrypt(email, process.env.ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8));

  const verificationCode = await VerificationCode.findOne({ email: decryptedEmail });

  if (!verificationCode) { // shouldn't happen, but just in case
    return res.status(400).json({
      success: false,
      message: 'Invalid email',
    });
  }

  jwt.verify(
    verificationCode.code,
    process.env.VERIFICATION_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Code has expired',
        });
      }

      if (decoded.eight_digit_code !== code) {
        return res.status(400).json({
          success: false,
          message: 'Incorrect code',
        });
      }

      // no duplicate emails so only one of these will be updated
      await Admin.updateOne({ email: decryptedEmail }, { password: password });
      await Member.updateOne({ email: decryptedEmail }, { password: password });
      await NonMember.updateOne({ email: decryptedEmail }, { password: password });

      await VerificationCode.deleteOne({ email: decryptedEmail }); // Delete the verification code after successful verification

      return res.status(200).json({
        success: true,
        message: 'Code verified successfully',
      });
    }
  );
});

module.exports = {
  sendResetPasswordCode,
  resetPassword,
};