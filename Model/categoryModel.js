const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
