const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// defines how athletes need to be defined in the database
const athleteSchema = new Schema(
  {
    forename: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    beltClass: {
      type: String,
      required: true,
    },
    weightClass: {
      type: String,
      required: true,
    },
    madeWeight: {
      type: Boolean,
      default: false,
    },
    athleteNo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Athlete", athleteSchema);
