const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
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
  timeFrom: {
    type: String,
    timestamps: true,
  },
  timeto: {
    type: String,
    timestamps: true,
  },
}); 

const Menu = mongoose.model("Menu", userSchema);
module.exports = Menu;
