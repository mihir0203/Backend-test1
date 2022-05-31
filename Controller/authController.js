const User = require("./../Model/usermodel");
const AppError = require("./../utils/appError");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
exports.signup = async (req, res, next) => {
  try {
    // if (req.body.password != req.body.confirmPassword) {
    //   throw new Error("Password not match");
    // }
    encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptedPassword,
    });
    createSendToken(newUser, 201, res);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //if email and password exist
    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }
    //  if user exists && password is correct
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    // console.log(req.body.password);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    // everything ok, send token to client
    createSendToken(user, 200, res);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
exports.protect = async (req, res, next) => {
  //  Getting token and check of it's there
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to get access.", 401)
      );
    }
    // console.log(token);

    //  Verification token
    await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // console.log('---------', decoded);

    next();
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
