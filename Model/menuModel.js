const mongoose = require("mongoose");
const validator = require("validator");
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  availablility: {
    type: String,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    default: "Monday",
  },
  timefrom: {
    type: String,
    required: true,
  },
  timeto: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
