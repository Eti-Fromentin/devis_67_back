const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const navbarController = require('../Controller/navbarController');
const isAdminTokenValid = require('../Middlewares/isAdminTokenValid');

router.get('/', asyncHandler(navbarController.getAll));
router.get('/admin/:id', isAdminTokenValid, asyncHandler(navbarController.getAll));
router.put('/admin/:id', isAdminTokenValid, asyncHandler(navbarController.updateNavbarData));
router.post('/admin/:id', isAdminTokenValid, asyncHandler(navbarController.createNavbarData));
router.delete('/admin/:id', isAdminTokenValid, asyncHandler(navbarController.deleteNavbarData));

module.exports = router;
