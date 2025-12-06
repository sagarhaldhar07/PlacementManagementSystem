const Order  = require("../models/order.model");

const createOrder = async(data)=>{
  try {
    console.log("data is :", data);
    const {Item1,Item2,Item3,Item4} = data;
    const orderObj = {
      item1 : Item1,
      item2 : Item2,
      item3 : Item3,
      item4 : Item4,
    }

    const order = await Order.create(orderObj);
    console.log("order is created :", order);
    return {
      statusCode : 200,
      data : order
    }
    
  } catch (error) {
    console.log("Error while ordering", error.message || error);
  }
}

module.exports= {
  createOrder
}