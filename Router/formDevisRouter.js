const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const formDevisController = require('../Controller/formDevisController');

router.get('/:category', asyncHandler(formDevisController.getForm));

module.exports = router;
