const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const navbarController = require('../Controller/navbarController');

router.get('/', asyncHandler(navbarController.getAllVisible));

module.exports = router;
