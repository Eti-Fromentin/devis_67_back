const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const pagesDetailsController = require('../Controller/pagesDetailsController');

router.get('/:name', asyncHandler(pagesDetailsController.getPagesDetails));

module.exports = router;
