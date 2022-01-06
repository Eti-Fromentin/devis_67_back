const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const navbarController = require('../Controller/navbarController');

router.get('/', asyncHandler(navbarController.getAll));

module.exports = router;
