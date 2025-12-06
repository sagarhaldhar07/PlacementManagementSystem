const User = require("../models/user.model")

const createUser = async(data)=>{
  try {
    const {Name, Email, Phone, Password}=data;
    const userObj = {
      name :Name ,
      phone :Phone,
      email :Email,
      password: Password
    }
    const user = await User.create(userObj);
    console.log("user created :", user);
    return {
      statusCode : 200,
      data : user
    }
  } catch (error) {
    console.log("Error while creating user :",error.message || error);
  }
}

const getUser = async () => {
  try {
    const users = await User.find();
    console.log("all data :", users);
    return {
      statusCode : 200,
      data : users
    }
  } catch (error) {
    console.log("Error while getting user", error.message || error);
  }
  
} 

const getUserByName = async (body) => {
  try {
    const {userName}=body
    console.log("user name:", userName);
    const userFound = await User.findOne({
      name : userName
    }) 
    console.log("user found", userFound);
    return {
     statusCode : 200,
     data : userFound
    }
  } catch (error) {
    console.log("Error while getting by Nama:",error.message || error);
  }
}

 module.exports ={
  createUser,
  getUser,
  getUserByName
 }