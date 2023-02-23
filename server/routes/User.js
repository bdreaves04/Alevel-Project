const express = require('express');
const router = express.Router();
const { signupUser, loginUser, changeUserPassword, changeUsername } = require("../controllers/userController") ;
const requireLoggedIn = require("../middleware/requireLoggedIn")

router.post('/signup',signupUser)

router.post('/login',loginUser)

router.use(requireLoggedIn)

router.post("/changePassword", changeUserPassword)

router.post("/changeUsername", changeUsername)

module.exports = router;