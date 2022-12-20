const matchModel = require("../models/matchModel");

//create a match
const createMatch = async (req, res) => {
  //add doc to db
  try {
    const match = await matchModel.create(req.body);
    res.status(200).json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all matches
const getMatches = async (req, res) => {
  const matches = await matchModel.find({}).sort({ matchNo: 1 });
  res.status(200).json(matches);
};

//get match by matchNo
const getMatchByMatchNo = async (req, res) => {
  const { matchNo } = req.body;
  const match = await matchModel.findOne({ matchNo });
  if (!match) {
    return res.status(404).json({ error: `no match with matchNo : ${matchNo}`});
  }
  res.status(200).json(match);
};

//get matches by ring
const getMatchByRing = async (req, res) => {
  const { ringNo } = req.body;
  const matches = await matchModel.find({ ringNo }).sort({ matchNo: 1 });
  if (!matches) {
    return res.status(404).json({ error: "no matches found" });
  }
  res.status(200).json(matches);
};

//update match info
const updateMatch = async (req, res) => {
  try {
    const { matchNo } = req.body;
    const match = await matchModel.findOneAndUpdate(
      { matchNo },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(match);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createMatch,
  getMatchByMatchNo,
  getMatchByRing,
  getMatches,
  updateMatch,
};
