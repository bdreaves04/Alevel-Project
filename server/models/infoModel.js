const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
    { message: { type: String, required: true } },
    { timestamps: true }
);

module.exports = mongoose.model("Info", infoSchema);
