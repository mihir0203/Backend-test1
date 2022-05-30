const Menu = require("./../Model/menuModel");
const AppError = require("./../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.createmenu = async (req, res, next) => {
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
};
