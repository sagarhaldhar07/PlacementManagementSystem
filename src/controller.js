const serviceHandler = require("./service");

const messageCallerController = async (req, res) => {
  const result = await serviceHandler.messageCallerService();
  res.send(result);
};

const sumController = async (req, res) => {
  const result = await serviceHandler.sumService();
  res.send(result);
};

module.exports = {
  messageCallerController,
  sumController,
};
