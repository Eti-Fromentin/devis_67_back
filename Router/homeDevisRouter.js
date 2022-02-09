const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const homeDevisController = require('../Controller/homeDevisController');
const isAdminTokenValid = require('../Middlewares/isAdminTokenValid');

router.get('/', asyncHandler(homeDevisController.getAll));
router.get('/categories', asyncHandler(homeDevisController.getCategLink));
router.get('/categories/admin/:id', isAdminTokenValid, asyncHandler(homeDevisController.getCategLink));

module.exports = router;
