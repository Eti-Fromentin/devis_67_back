const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const homeDevisController = require('../Controller/navbarController');

router.get('/', asyncHandler(homeDevisController.getAllVisible));

module.exports = router;
