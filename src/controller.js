const serviceHandler = require("./service");

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
  
}
const mulController = async (req, res) => {
  const result = await serviceHandler.mulService();
  res.send(result);
  
}
const divController = async (req, res) => {
  const result = await serviceHandler.divService();
  res.send(result);
  
}

module.exports = {
  messageCallerController,
  sumController,
  subController,
  mulController,
  divController
};
