const { application } = require("express");
const express = require("express");
const router = express.Router();

//get all athletes
router.get("/", (req, res) => {
  res.json({ mssg: "get all athletes" });
});

//Get single athlete
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single athlete data" });
});

//add new athlete data
router.post("/", (req, res) => {
  res.json({ mssg: "add a new athlete" });
});

//update athlete data
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update athlete data by id" });
});

module.exports = router;
