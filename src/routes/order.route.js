const express = require("express");
const router = express.Router();
const ordercontroller = require("../controllers/order.controller");

router.route("/orders").post(ordercontroller.createOrder);

module.exports = router;