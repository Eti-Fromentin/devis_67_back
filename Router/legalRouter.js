const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const legalController = require('../Controller/legalController');

router.get('/', asyncHandler(legalController.getAllVisible));

module.exports = router;
