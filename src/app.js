const express = require("express");
const app = express();
const router = require("./routes/route");
const userRouter = require("./routes/user.routes");
const orderRouter = require("./routes/order.route");

// middleware to parse json body
app.use(express.json());

app.use("/v1", router);
app.use("/user", userRouter);
app.use("/order", orderRouter);



module.exports = app;
