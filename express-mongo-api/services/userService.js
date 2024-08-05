const userRepository = require('../repositories/userRepository');

const createUser = async (username, password, email) => {
  try {
    const user= await userRepository.createUser(username, password, email);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUsers = async () => {
  try {
    const users = await userRepository.findAllUsers();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUsers,
};
