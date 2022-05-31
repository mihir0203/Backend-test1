const Category = require("./../Model/categoryModel");
const AppError = require("./../utils/appError");
const authController = require("./authController");
exports.createcategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const newcategory = await Category.create({
      name: req.body.name,
    });
    res.status(201).json({
      status: "success",
      data: {
        category: newcategory,
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
exports.getcategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const category = await Category.findOne({
      name: req.body.name,
    }).populate({
      path: "menu",
      select: "_id",
    });
    res.status(201).json({
      status: "success",
      data: {
        category: category,
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
