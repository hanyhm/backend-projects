const User = require("../models/User");

const createUser = async (username, email, password) => {
  try {
    const user = new User({ username, email, password });
    await user.save();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};


const findAllUsers = async () => {
  try {
    const users = await User.find();
    return users;    
  } catch (error) {
    throw new Error(error.message);    
  }
};

module.exports = {
  createUser,
  findAllUsers,
};
