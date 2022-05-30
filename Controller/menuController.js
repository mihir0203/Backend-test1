const Menu = require("./../Model/Menumodel");
const AppError = require("./../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.createmenu = async (req, res, next) => {
  try {
    const newMenu = await Menu.create({
      name: req.body.name,
      availablility: req.body.availablility,
      timeFrom: req.body.timefrom,
      timeto: req.body.timeto,
    });
    res.status(201).json({
      status: "success",
      data: {
        tour: newMenu,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
