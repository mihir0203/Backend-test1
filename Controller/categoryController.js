const Menu = require("./../Model/menuModel");
const AppError = require("./../utils/appError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.createmenu = async (req, res, next) => {
  const newMenu = await Menu.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      tour: newMenu,
    },
  });
};
