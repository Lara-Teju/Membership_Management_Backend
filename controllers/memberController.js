const Member = require('../models/memberModel');

exports.getMembers = async (req, res) => {
  const members = await Member.find();
  res.json(members);
};

exports.addMember = async (req, res) => {
  const newMember = new Member(req.body);
  await newMember.save();
  res.json({ message: 'Member added successfully' });
};

// Get members by preference
exports.getMembersByPreference = async (req, res) => {
  const { eventCategory } = req.params;
  
  try {
    const members = await Member.find({ preferences: eventCategory });
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};