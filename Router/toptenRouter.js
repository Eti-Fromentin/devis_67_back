const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const navbarController = require('../Controller/toptenController');

router.get('/', asyncHandler(navbarController.getAll));

module.exports = router;
