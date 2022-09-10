const { response } = require("express");
const express = require("express");
const Athlete = require("../models/athleteModel")
const router = express.Router();

//get all athletes
router.get("/", async (req, res) => {
 try {
  const athletes = await Athlete.find();
  res.status(200).json({athletes});
 } catch (error) {
  res.status(400).json({error: error.message});
 }
});

//Get single athlete
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single athlete data" });
});

//add new athlete data
router.post("/", async (req, res) => {
  const {forename, surname, beltClass, weightClass, madeWeight} = req.body;
  try {
    const athlete = await Athlete.create({forename, surname, beltClass, weightClass, madeWeight});
    res.status(200).json(athlete);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

//update athlete data
router.patch("/:id", (req, res) => {
  res.json({mssg: "update athlete by id"});
});

module.exports = router;
