const Athlete = require("../models/athleteModel");
const mongoose = require("mongoose");

//create new athlete
const createAthlete = async (req, res) => {
  //add doc to database
  try {
    const athlete = await Athlete.create(req.body);
    res.status(200).json(athlete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all athletes
const getAthletes = async (req, res) => {
  const athletes = await Athlete.find({}).sort({ surname: 1 });
  res.status(200).json(athletes);
};

//get singular atlete by id
const getAthleteFromId = async (req, res) => {
  const { id } = req.params;
  //console.log(id)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(403).json({ error: "no  such athlete" });
  }

  const athlete = await Athlete.findOne({ _id: id });

  if (!athlete) {
    return res.status(404).json({ error: "no such athlete" });
  }

  res.status(200).json(athlete);
};

//get athlete by surname
const getAthleteBySurname = async (req, res) => {
  const { surname } = req.body;

  const athlete = await Athlete.find({ surname }).sort({ forename: 1 });

  if (!athlete) {
    return res.status(404).json({ error: "no such athlete" });
  }

  res.status(200).json(athlete);
};

//update athlete data by id
const updateAthlete = async (req, res) => {
  try {
    const athlete = await Athlete.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(athlete);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//button to update that athlete has made weight
const madeWeight = async (req, res) => {
  try {
    const athlete = await Athlete.findByIdAndUpdate(
      req.params.id,
      { madeWeight: true },
      { new: true }
    );
    res.status(200).json(athlete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//exporting functions

module.exports = {
  createAthlete,
  getAthletes,
  getAthleteFromId,
  getAthleteBySurname,
  updateAthlete,
  madeWeight,
};