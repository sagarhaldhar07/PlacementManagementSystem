const httpStatus = require("http-status");
const User = require("../models/user.model");
const ApiError = require("../utils/apiError");

const createUser = async (body) => {
  try {
    // body = {
    //   Name: "John Doe",
    //   Email: "johndoe@example.com",
    //   Phone: "1234567890",
    //   Password: "password123",
    // }
    // Destructure the request body
    // const name = body.Name;
    // const email = body.Email;
    // const phone = body.Phone;
    // const password = body.Password;
    const { Name, Email, Phone, Password } = body;
    console.log("Name:", Name);
    console.log("Email:", Email);
    console.log("Phone:", Phone);
    console.log("Password:", Password);

    // Check if all required fields are provided
    if (!Name || !Email || !Phone || !Password) {
      throw new ApiError(
        httpStatus.status.BAD_REQUEST,
        "Please provide all details"
      );
    }

    // Create a new user object to insert data in DB
    const userObj = {
      name: Name,
      phone: Phone,
      email: Email,
      password: Password,
    };

    const createdUser = await User.create(userObj);
    console.log("user created :", createdUser);
    if (!createdUser) {
      throw new ApiError(
        httpStatus.status.INTERNAL_SERVER_ERROR,
        "Error while creating user"
      );
    }

    return {
      statusCode: httpStatus.status.OK,
      message: "User created successfully",
      data: createdUser,
    };
  } catch (error) {
    console.log("Error while creating user :", error.message || error);
    return {
      statusCode: error.statusCode || httpStatus.status.INTERNAL_SERVER_ERROR,
      message: error.message || error,
    }
  }
};

const getUser = async () => {
  try {
    const users = await User.find();
    console.log("all data :", users);
    return {
      statusCode: 200,
      data: users,
    };
  } catch (error) {
    console.log("Error while getting user", error.message || error);
  }
};

const getUserByName = async (body) => {
  try {
    const { userName } = body;
    console.log("user name:", userName);
    const userFound = await User.findOne({
      name: userName,
    });
    console.log("user found", userFound);
    return {
      statusCode: 200,
      data: userFound,
    };
  } catch (error) {
    console.log("Error while getting by Nama:", error.message || error);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserByName,
};
