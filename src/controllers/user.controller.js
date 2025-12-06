const userService = require("../services/user.service");

const createUser= async (req, res) => {
  const result = await userService.createUser(req.body);
 res.status(result.statusCode).json(result)
};

const getUser =async (req , res) => {
  const result = await userService.getUser(req.body);
  res.status(result.statusCode).json(result)
} ;

const getUserByName =async (req , res) => {
  const result = await userService.getUserByName(req.body);
  res.status(result.statusCode).json(result)
} ;

module.exports ={
  createUser,
  getUser,
  getUserByName
}
