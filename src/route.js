const express = require("express");
const router = express.Router();
const controllerHandler = require("./controller");

router.route("/message").get(controllerHandler.messageCallerController);

module.exports = router;
