const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    // Call the userService to get all users
    const users = await userService.getUsers();
    // Send the users as a response with a success status code
    res.status(200).json(users);
  } catch (error) {
    // If there's an error, send an error message with a server error status code
    res.status(500).json({ message: error.message });
  }
};
