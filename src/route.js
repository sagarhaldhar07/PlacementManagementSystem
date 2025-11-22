const express = require("express");
const router = express.Router();
const controllerHandler = require("./controller");

router.route("/message").get(controllerHandler.messageCallerController);
router.route("/sum").get(controllerHandler.sumController);
router.route("/sub").get(controllerHandler.subController);
router.route("/mul").get(controllerHandler.mulController);
router.route("/div").get(controllerHandler.divController);
router.route("/sumPost").post(controllerHandler.sumPostController);
router.route("/subPost").post(controllerHandler.subPostController);
router.route("/mulPost").post(controllerHandler.mulPostController);
router.route("/divPost").post(controllerHandler.divPostController);

module.exports = router;
