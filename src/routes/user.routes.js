const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/create-user").post(userController.createUser);
router.route("/getuser").get(userController.getUser);
router.route("/getUserByName").get(userController.getUserByName);


module.exports = router;