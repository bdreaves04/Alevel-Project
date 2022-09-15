const express = require("express");
const Athlete = require("../models/athleteModel");
const router = express.Router();
const {
  createAthlete,
  getAthletes,
  getAthleteFromId,
  getAthleteBySurname,
} = require("../controllers/athletesController");

//get all athletes
router.get("/", getAthletes);

//get athlete from surname
router.get("/surname", getAthleteBySurname);

//Get single athlete by id
router.get("/:id", getAthleteFromId);

//add new athlete data
router.post("/", createAthlete);

//update athlete data
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update athlete by id" });
});

module.exports = router;
