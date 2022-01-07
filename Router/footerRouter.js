const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const footerController = require('../Controller/footerController');

router.get('/', asyncHandler(footerController.getAllVisible));

module.exports = router;
