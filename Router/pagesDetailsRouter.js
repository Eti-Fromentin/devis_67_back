const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const pagesDetailsController = require('../Controller/pagesDetailsController');
const isAdminTokenValid = require('../Middlewares/isAdminTokenValid');

router.get('/:name', asyncHandler(pagesDetailsController.getPagesDetails));
router.get('/', asyncHandler(pagesDetailsController.getDevisDynamicRoutes));
router.get('/admin/:id', isAdminTokenValid, asyncHandler(pagesDetailsController.getAllPageslink));

module.exports = router;
