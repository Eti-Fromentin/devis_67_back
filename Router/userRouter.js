const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userController = require('../Controller/userController');

router.get('/', asyncHandler(userController.getAll));

module.exports = router;
