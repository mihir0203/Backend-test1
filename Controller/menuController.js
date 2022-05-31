const Menu = require("./../Model/Menumodel");
const AppError = require("./../utils/appError");
const authController = require("./authController");
exports.createmenu = async (req, res, next) => {
  try {
    const newMenu = await Menu.create({
      name: req.body.name,
      availablility: req.body.availablility,
      timefrom: req.body.timefrom,
      timeto: req.body.timeto,
    });
    console.log(req.body);
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
