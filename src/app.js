const express = require("express");
const app = express();
const router = require("./route");

app.use("/v1", router);

module.exports = app;
