const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const authController = require('../Controller/authController');

router.post('/', asyncHandler(authController.logIn));

module.exports = router;
