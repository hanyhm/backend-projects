const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    
    const user = await userService.createUser(req.body.username, req.body.password, req.body.email);
    res.status(201).json(user);
    
  } catch (error) {
    res.status(500).json({ message: error.message });  
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
