const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const conditionsController = require('../Controller/conditionsController');

router.get('/', asyncHandler(conditionsController.getAllVisible));

module.exports = router;
