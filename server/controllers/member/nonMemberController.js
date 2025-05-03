const { NonMember } = require('../../models');
const { asyncWrapper } = require('../../middleware');

// Get all non-members
// endpoint: /get/non-members
const getNonMembers = asyncWrapper(async (req, res) => {
  const nonMembers = await NonMember.find({}).sort({ name: 1 });
  res.status(200).json({ nonMembers });
});

// Get single non-member by email
// endpoint: /get/non-member/:email
const getNonMember = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const nonMember = await NonMember.findOne({ email: email.toLowerCase() });
  
  if (!nonMember) {
    return res.status(404).json({ message: 'NonMember not found' });
  }
  
  res.status(200).json({ nonMember });
});

// Create new non-member
// endpoint: /create/non-member
const createNonMember = asyncWrapper(async (req, res) => {
  const { name, surname, email, password, phone, yearOfStudy } = req.body;

  // Check if non-member already exists
  const existingNonMember = await NonMember.findOne({ email: email.toLowerCase() });
  if (existingNonMember) {
    return res.status(400).json({ message: 'NonMember with this email already exists' });
  }

  const nonMember = await NonMember.create({ 
    name, 
    surname, 
    email: email.toLowerCase(), 
    password,
    phone,
    yearOfStudy
  });
  
  res.status(201).json({ nonMember });
});

// Update non-member
// endpoint: /update/non-member/:email
const updateNonMember = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const updateData = req.body;

  // Remove email from updateData if present to prevent changing email
  if (updateData.email) {
    delete updateData.email;
  }

  // If password is being updated, you should hash it here

  const nonMember = await NonMember.findOneAndUpdate(
    { email: email.toLowerCase() },
    updateData,
    { new: true, runValidators: true }
  );

  if (!nonMember) {
    return res.status(404).json({ message: 'NonMember not found' });
  }

  res.status(200).json({ nonMember });
});

// Delete non-member
// endpoint: /delete/non-member/:email
const deleteNonMember = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const nonMember = await NonMember.findOneAndDelete({ email: email.toLowerCase() });

  if (!nonMember) {
    return res.status(404).json({ message: 'NonMember not found' });
  }

  res.status(200).json({ message: 'NonMember deleted successfully' });
});

module.exports = {
  getNonMembers,
  getNonMember,
  updateNonMember,

  // for admin
  createNonMember,
  deleteNonMember
};