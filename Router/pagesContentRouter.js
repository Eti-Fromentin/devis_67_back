const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const pagesContentController = require('../Controller/pagesContentController');

router.get('/', asyncHandler(pagesContentController.getAllVisible));

module.exports = router;
