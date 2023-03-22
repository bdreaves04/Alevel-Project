const InfoModel = require("../models/infoModel");
const mongoose = require("mongoose");

const getHomeMsg = async (req, res) => {
  const messages = await InfoModel.find({});
  res.status(200).json(messages);
};

const sendHomeMsg = async (req, res) => {
  try {
    const message = await InfoModel.create(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMsg = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "not a valid workout id" });
  }

  const message = await InfoModel.findByIdAndDelete(id).catch((err) => {
    res.status(404).json({ error: "message not found" });
  });

  res.status(200).json(message);
};

module.exports = {
  getHomeMsg,
  sendHomeMsg,
  deleteMsg,
};
