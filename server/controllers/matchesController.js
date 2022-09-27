const MatchModel = require("../models/matchModel");
const mongoose = require("mongoose");
const matchModel = require("../models/matchModel");

//create a match
const createMatch = async (req, res) => {
  const { matchNo, athleteRedId, athleteBlueId } = req.body;
  //add doc to db
  try {
    const match = await MatchModel.create({
      matchNo,
      athleteBlueId,
      athleteRedId,
    });
    res.status(200).json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all matches
const getMatches = async (req, res) => {
  const matches = await MatchModel.find({}).sort({ matchNo: 1 });
  res.status(200).json(matches);
};

//get match by matchNo
const getMatchByMatchNo = async (req, res) => {
  const { matchNo } = req.body;
  const match = await matchModel.findOne({ matchNo });
  if (!match) {
    return res.status(404).json({ error: "no such athlete" });
  }
  res.status(200).json(match);
};

//get macthes by ring
const getMatchByRing = async (req, res) => {
  const { ringNo } = req.body;
  const matches = matchModel.find({ ringNo }).sort({ matchNo: 1 });
  if (!matches) {
    return res.status(404).json({ error: "no matches found" });
  }
  res.status(200).json(matches);
};

//update match info
const updateMatch = async (req, res) => {
  try {
    console.log(req.body);
    const { matchNo } = req.body;
    const match = await MatchModel.findByIdAndUpdate(
      matchNo,
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
