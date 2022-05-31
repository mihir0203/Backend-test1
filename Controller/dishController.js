const Dish = require("./../Model/dishModel");
const AppError = require("./../utils/appError");
const authController = require("./authController");
exports.createdish = async (req, res, next) => {
  try {
    console.log(req.body);
    const newdish = await Category.create({
      name: req.body.name,
      price: req.body.price,
      isAvailable: req.body.isAvailable,
      allergy: req.body.allergy,
    });
    res.status(201).json({
      status: "success",
      data: {
        dish: newdish,
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
