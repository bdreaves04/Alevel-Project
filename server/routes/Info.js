const express = require("express");
const {
    getHomeMsg,
    sendHomeMsg,
    deleteMsg,
} = require("../controllers/infoController");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

router.get("/", getHomeMsg);

router.use(requireAuth);

router.post("/", sendHomeMsg);

router.delete("/:id", deleteMsg);

module.exports = router;
