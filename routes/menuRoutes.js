const express = require("express");
const router = express.Router();
const authController = require("./../Controller/authController");
const menuController = require("./../Controller/menuController");

router.route("/menu").post(authController.protect, menuController.createmenu);

module.exports = router;
