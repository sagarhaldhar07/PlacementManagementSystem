const serviceHandler = require("../services/service");

const messageCallerController = async (req, res) => {
  const result = await serviceHandler.messageCallerService();
  res.send(result);
};

const sumController = async (req, res) => {
  const result = await serviceHandler.sumService();
  res.send(result);
};

const subController = async (req, res) => {
  const result = await serviceHandler.subService();
  res.send(result);
};
const mulController = async (req, res) => {
  const result = await serviceHandler.mulService();
  res.send(result);
};
const divController = async (req, res) => {
  const result = await serviceHandler.divService();
  res.send(result);
};

const sumPostController = async (req, res) => {
  const result = await serviceHandler.sumPostService(req);
  res.send(result);
};
const subPostController = async (req, res) => {
  const result = await serviceHandler.subPostService(req);
  res.send(result);
};
const mulPostController = async (req, res) => {
  const result = await serviceHandler.mulPostService(req);
  res.send(result);
};
const divPostController = async (req, res) => {
  const result = await serviceHandler.divPostService(req);
  res.send(result);
};
const helloPostController = async (req, res) => {
  const result = await serviceHandler.hello(req);
  res.send(result);
};
const tablePostController = async (req, res) => {
  const result = await serviceHandler.table(req);
  res.send(result);
};

module.exports = {
  messageCallerController,
  sumController,
  subController,
  mulController,
  divController,
  sumPostController,
  subPostController,
  mulPostController,
  divPostController,
  helloPostController,
  tablePostController
};
