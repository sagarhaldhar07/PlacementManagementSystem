const express = require("express");
const router = express.Router();
const controllerHandler = require("./controller");

router.route("/message").get(controllerHandler.messageCallerController);
router.route("/sum").get(controllerHandler.sumController);
router.route("/sub").get(controllerHandler.subController);
router.route("/mul").get(controllerHandler.mulController);
router.route("/div").get(controllerHandler.divController);
router.route("/sumPost").post(controllerHandler.sumPostController);

module.exports = router;
