const express = require("express");
const router = express.Router();
const {
  createAthlete,
  getAthletes,
  getAthleteFromId,
  getAthleteBySurname,
  updateAthlete,
} = require("../controllers/athletesController");

//get all athletes
router.get("/", getAthletes);

//get athlete from surname
router.get("/surname", getAthleteBySurname);

//Get single athlete by id
router.get("/getbyid/:id", getAthleteFromId);

//add new athlete data
router.post("/", createAthlete);

//update athlete data
router.put("/:id", updateAthlete);

module.exports = router;
