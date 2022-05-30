const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
const AppError = require("./utils/appError");
const globalErrorHandler = require("./Controller/errorController");
const userRouter = require("./routes/userRoutes");
const menuRouter = require("./routes/menuRoutes");
// const userRouter = require("./routes/userRoutes");

app.use(express.json({ limit: "10kb" }));

// app.use("/mi", (req, res, next) => {
//   res.send("hello world");
// });

app.use("/api/v1/users", userRouter);
app.use("/api/v1/menus", menuRouter);
app.use(globalErrorHandler);

const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con);
    console.log("Connected to DB");
  });
const port = process.env.PORT || 7000;
const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
