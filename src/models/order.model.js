const mongoose  = require("mongoose");

const orderSchema = mongoose.Schema(
 {
  item1 : {
     type : String,
     require : true
  },
   item2 : {
     type : String,
     require : true
  },
   item3 : {
     type : String,
     require : true
  },
   item4 : {
     type : String,
     require : true
  }
 },
 {
  timestamps : true
 }
)

const Order = mongoose.model("Order", orderSchema ,"orders");

module.exports = Order;