const express = require("express");
const Athlete = require("../models/athleteModel")
const router = express.Router();
const { createAthlete, getAthletes, getAthleteFromId } = require('../controllers/athletesController')

//get all athletes
router.get("/", getAthletes);

//Get single athlete
router.get("/:id", getAthleteFromId);

//add new athlete data
router.post("/", createAthlete);

//update athlete data
router.patch("/:id", (req, res) => {
  res.json({mssg: "update athlete by id"});
});

module.exports = router;
