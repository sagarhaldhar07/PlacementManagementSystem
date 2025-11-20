const serviceHandler = require("./service");

const messageCallerController = async (req, res) => {
  const result = await serviceHandler.messageCallerService();
  res.send(result);
};

module.exports = {
  messageCallerController
};
