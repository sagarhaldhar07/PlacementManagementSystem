const orderservice = require("../services/order.service");

const createOrder = async (req, res) => {
  const result = await orderservice.createOrder(req.body);
   res.status(result.statusCode).json(result)
  
};

module.exports ={
  createOrder
}