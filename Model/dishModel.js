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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  isAvailable: {
    type: Boolean,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
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
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
