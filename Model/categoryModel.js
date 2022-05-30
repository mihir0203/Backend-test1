const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
});
const Dish = mongoose.model("Dish", categorySchema);
module.exports = Dish;
