const express = require('express');
const { getMatches, getMatchByRing, getMatchByMatchNo, createMatch, updateMatch } = require('../controllers/matchesController');
const router = express.Router();

//get all matches
router.get('/', getMatches);

//get matches by ring
router.get('/ring/:id', getMatchByRing);

//get match by matchNo
router.get('/', getMatchByMatchNo);

//create a match
router.post('/', createMatch);

//update a match by Id
router.put(':id', updateMatch);

module.exports = router;