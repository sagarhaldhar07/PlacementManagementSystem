const express = require("express");
const app = express();
const router = require("./route");

// middleware to parse json body
app.use(express.json());

app.use("/v1", router);

module.exports = app;
