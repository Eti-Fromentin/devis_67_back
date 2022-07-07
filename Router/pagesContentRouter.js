const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const pagesContentController = require('../Controller/pagesContentController');

router.get('/:page', asyncHandler(pagesContentController.getByPage));

module.exports = router;
