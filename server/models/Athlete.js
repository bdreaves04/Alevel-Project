const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
  },
  { timestamps: true }
);
