const { Member } = require('../../models');
const { asyncWrapper } = require('../../middleware');

// Get all members
// endpoint: /get/members
const getMembers = asyncWrapper(async (req, res) => {
  const members = await Member.find({}).sort({ name: 1 }); // Sort by name ascending
  res.status(200).json({ members });
});

// Get single member by email
// endpoint: /get/member/:email
const getMember = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const member = await Member.findOne({ email: email.toLowerCase() });
  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }
  res.status(200).json({ member });
});

// Create new member
// endpoint: /create/member
const createMember = asyncWrapper(async (req, res) => {
  const { name, surname, email, password, phone } = req.body;
  
  // Check if member already exists
  const existingMember = await Member.findOne({ email: email.toLowerCase() });
  if (existingMember) {
    return res.status(400).json({ message: 'Member with this email already exists' });
  }

  const member = await Member.create({ 
    name, 
    surname, 
    email: email.toLowerCase(), 
    password, 
    phone 
  });
  
  res.status(201).json({ member });
});

// Create Members
// endpoint: /create/members
const createMembers = asyncWrapper(async (req, res) => {
  const membersData = req.body.members;

  if (!Array.isArray(membersData) || membersData.length === 0) {
    return res.status(400).json({ message: 'Invalid members data' });
  }

  // Normalize emails
  const normalizedMembers = membersData.map(member => ({
    ...member,
    email: member.email.toLowerCase()
  }));

  // Get all existing emails in one query
  const existingEmails = new Set(
    (await Member.find({
      email: { $in: normalizedMembers.map(m => m.email) }
    }).select('email -_id')).map(doc => doc.email)
  );

  // Filter out duplicates
  const membersToInsert = normalizedMembers.filter(
    member => !existingEmails.has(member.email)
  );

  if (membersToInsert.length === 0) {
    return res.status(400).json({
      message: 'All members already exist',
      duplicates: normalizedMembers.map(m => m.email)
    });
  }

  const result = await Member.insertMany(membersToInsert);

  res.status(201).json({
    message: `Successfully created ${result.length} members, ${
      normalizedMembers.length - result.length
    } duplicates skipped`,
    created: result,
    duplicates: normalizedMembers.length - result.length
  });
});

// Update member
// endpoint: /update/member/:email
const updateMember = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const updateData = req.body;

  // Remove email from updateData if present to prevent changing email
  if (updateData.email) {
    delete updateData.email;
  }

  const member = await Member.findOneAndUpdate(
    { email: email.toLowerCase() },
    updateData,
    { new: true, runValidators: true }
  );

  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }

  res.status(200).json({ member });
});

// Delete member
// endpoint: /delete/member/:email
const deleteMember = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const member = await Member.findOneAndDelete({ email: email.toLowerCase() });

  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }

  res.status(200).json({ message: 'Member deleted successfully' });
});

// Update member's degree information
// endpoint: /update/member/degree/:email
const updateMemberDegree = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const degreeData = req.body;

  const member = await Member.findOneAndUpdate(
    { email: email.toLowerCase() },
    { degree: degreeData },
    { new: true, runValidators: true }
  );

  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }

  res.status(200).json({ member });
});

// Add document to member
// endpoint: /add/member/document/:email
const addMemberDocument = asyncWrapper(async (req, res) => {
  const { email } = req.params;
  const documentData = req.body;

  const member = await Member.findOneAndUpdate(
    { email: email.toLowerCase() },
    { $push: { documents: documentData } },
    { new: true, runValidators: true }
  );

  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }

  res.status(200).json({ member });
});

// Remove document from member
// endpoint: /remove/member/document/:email/:documentName
const removeMemberDocument = asyncWrapper(async (req, res) => {
  const { email, documentName } = req.params;

  const member = await Member.findOneAndUpdate(
    { email: email.toLowerCase() },
    { $pull: { documents: { name: documentName } } },
    { new: true }
  );

  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }

  res.status(200).json({ member });
});

module.exports = {
  getMembers,
  getMember,
  updateMember,
  updateMemberDegree,
  addMemberDocument,
  removeMemberDocument,

  // for admins
  createMember,
  createMembers,
  deleteMember
};