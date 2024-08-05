const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const errorHandler = require('../middlewares/errorHandler');

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;
