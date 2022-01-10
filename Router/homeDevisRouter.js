const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const homeDevisController = require('../Controller/homeDevisController');

router.get('/', asyncHandler(homeDevisController.getAll));

module.exports = router;
