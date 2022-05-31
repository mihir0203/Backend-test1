const express = require("express");
const router = express.Router();
const authController = require("./../Controller/authController");
const categoryController = require("./../Controller/categoryController");

router
  .route("/category")
  .post(authController.protect, categoryController.createcategory)
  .get(authController.protect, categoryController.getcategory);

module.exports = router;
