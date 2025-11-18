const express = require("express");
const server = express();

const sum = (a, b) => {
  return a + b;
};

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/sum", (req, res) => {
  let a = 2;
  let b = 3;
  const result = sum(a, b);
  res.send(`The sum of ${a} and ${b} is ${result}`);
});

module.exports = server;
