const express = require("express");
const {
    getMatches,
    getMatchByRing,
    getMatchByMatchNo,
    createMatch,
    updateMatch,
    completeMatch,
    getComplete,
} = require("../controllers/matchesController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

//get all matches
router.get("/", getMatches);

//get matches by ring
router.post("/ring/", getMatchByRing);

//get match by matchNo
router.post("/getMatchFromNo/", getMatchByMatchNo);

router.post("/getComplete", getComplete)

router.use(requireAuth);

//create a match
router.post("/", createMatch);

//update a match by matchNo
router.put("/", updateMatch);

router.put("/complete", completeMatch);

module.exports = router;
