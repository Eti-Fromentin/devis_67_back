const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const isTokenValid = require('../Middlewares/isTokenValid');
const devisController = require('../Controller/devisController');

router.post('/:id', isTokenValid, asyncHandler(devisController.postDevis));

module.exports = router;
