const Athlete = require("../models/athleteModel");

//create new athlete

const createAthlete = async (req, res) => {
  const { forename, surname, beltClass, weightClass, madeWeight } = req.body;
  //add doc to database
  try {
    const athlete = await Athlete.create({
      forename,
      surname,
      beltClass,
      weightClass,
      madeWeight,
    });
    res.status(200).json(athlete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all athletes
const getAthletes = async (req,res) => {
    const athletes = await Athlete.find( {} ).sort({surname: -1});
    res.status(200).json(athletes);
}

//exporting functions

module.exports = {
    createAthlete,
    getAthletes
}