const Client = require("../model/Client");

const createClient = async (req, res) => {
  const client = await Client.create({
    companyName: req.body.companyName.toLowerCase(),
    address: req.body.address,
    city: req.body.city,
    state: req.body.state.toLowerCase(),
    zip: req.body.zip,
    headCount: req.body.headCount,
  });

  if (!client) {
    return res
      .status(403)
      .json({ message: `Request fail, check if the fields are correct` });
  }
  res.status(201).json({
    description: "Client created",
  });
};

const getClientByName = async (req, res) => {
  const client = await Client.find({
    companyName: req.query.name.toLowerCase(),
  });

  if (client.length === 0) {
    return res
      .status(400)
      .json({ message: `Client ${req.query.name} not found` });
  }
  res.status(200).json({
    description: "Client fetched",
    result: client,
  });
};

const getClientByState = async (req, res) => {
  const client = await Client.find({ state: req.query.state.toLowerCase() });

  if (client.length === 0) {
    return res.status(400).json({
      message: `Client with the state in ${req.query.state} not found`,
    });
  }

  res.status(200).json({
    description: "Client fetched",
    result: client,
  });
};

const getAll = async (req, res) => {
  const clients = await Client.find();

  if (clients.length === 0) {
    return res.status(400).json({
      message: "No clients found",
    });
  }

  res.status(200).json({
    description: "Fetched all clients",
    result: clients,
  });
};

module.exports = {
  createClient,
  getClientByName,
  getClientByState,
  getAll,
};
