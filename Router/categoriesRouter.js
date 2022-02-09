const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const isAdminTokenValid = require('../Middlewares/isAdminTokenValid');
const categoriesController = require('../Controller/categoriesController');

router.post('/admin/:id', isAdminTokenValid, asyncHandler(categoriesController.createCategory));
router.delete('/admin/:id', isAdminTokenValid, asyncHandler(categoriesController.deleteCategory));
router.put('/admin/:id', isAdminTokenValid, asyncHandler(categoriesController.updateCategory));

module.exports = router;
