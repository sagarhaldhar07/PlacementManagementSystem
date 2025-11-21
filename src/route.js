const express = require("express");
const router = express.Router();
const controllerHandler = require("./controller");

router.route("/message").get(controllerHandler.messageCallerController);
router.route("/sum").get(controllerHandler.sumController);

module.exports = router;
