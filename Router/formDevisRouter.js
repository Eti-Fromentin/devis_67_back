const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const formDevisController = require('../Controller/formDevisController');

router.get('/', asyncHandler(formDevisController.getForm));

module.exports = router;
