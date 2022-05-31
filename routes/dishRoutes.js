const express = require("express");
const router = express.Router();
const authController = require("./../Controller/authController");
const dishController = require("./../Controller/dishController");

router.route("/dish").post(authController.protect, dishController.createdish);

module.exports = router;
