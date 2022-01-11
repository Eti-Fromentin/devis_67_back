const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const footerController = require('../Controller/footerController');

router.get('/', asyncHandler(footerController.getAll));

module.exports = router;
