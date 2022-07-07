const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const authController = require('../Controller/authController');

router.post('/login', asyncHandler(authController.logIn));
router.post('/adminlogin', asyncHandler(authController.adminLogIn));

module.exports = router;
