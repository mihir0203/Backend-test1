const mongoose = require("mongoose");
const validator = require("validator");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
  },
  allergy: [
    {
      type: String,
      enum: [
        "gluten",
        "lactose",
        "eggs",
        "nuts",
        "soy",
        "fish",
        "shellfish",
        "none",
      ],
      default: "none",
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
