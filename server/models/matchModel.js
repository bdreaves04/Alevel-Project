const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    matchNo: {
      type: Number,
      required: true,
      unique: true,
    },
    athleteRedId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    athleteBlueId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    ringNo: {
      type: Number,
      required: true,
    },
    athleteRedNo: {
      type: String,
      required: true,
    },
    athleteBlueNo: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    redChecked: {
      type: Boolean,
      default: false,
    },
    blueChecked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
