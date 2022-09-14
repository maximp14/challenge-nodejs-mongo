const Member = require("../model/Member");
const Client = require("../model/Client");

const createMember = async (req, res) => {
  const member = await Member.create({
    name: req.body.name.toLowerCase(),
    phoneNumber: req.body.name,
    email: req.body.email,
    note: req.body.note,
    clientId: req.body.clientId,
  });

  if (!member) {
    return res
      .status(403)
      .json({ message: `Request fail, check if the fields are correct` });
  }
  res.status(201).json({
    description: "Member created",
  });
};

const getMembers = async (req, res) => {
  const members = await Member.find();

  if (members.length === 0) {
    return res.status(400).json({
      message: "No members found",
    });
  }

  res.status(200).json({
    description: "Fetched all members",
    result: members,
  });
};

const addNote = async (req, res) => {
  const member = await Member.findOne({
    name: req.body.name,
  });

  req.body.note.forEach((note) => {
    member.note.push(note);
  });

  await Member.updateOne(member);

  res.status(200).json({
    description: "Note added to member",
    result: member,
  });
};

const moveMember = async (req, res) => {
  const member = await Member.findOne({
    name: req.body.memberName.toLowerCase(),
  });
  const newClient = await Client.findOne({
    companyName: req.body.newClient.toLowerCase(),
  });

  if (!newClient && !member) {
    return res
      .status(403)
      .json({ message: `Request fail, check if the fields are correct` });
  }

  member.clientId = newClient._id;

  await member.save();

  if (req.body.note.length > 0) {
    notes.forEach((note) => {
      updatedMember.note.push(note);
    });
  }

  res.status(200).json({
    description: "The member has been changed client",
    result: member,
  });
};

module.exports = {
  createMember,
  getMembers,
  addNote,
  moveMember,
};
