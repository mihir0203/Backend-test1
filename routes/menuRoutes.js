const express = require("express");
const router = express.Router();
const authController = require("./../Controller/authController");

router.route("/menu").post(menuController.createmenu);



module.exports = router;