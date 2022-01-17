const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const isTokenValid = require('../Middlewares/isTokenValid');
const userController = require('../Controller/userController');

router.get('/', asyncHandler(userController.getOneByEmail));
router.get('/:id', isTokenValid, asyncHandler(userController.getOneById));
router.post('/', asyncHandler(userController.postOneUser));

module.exports = router;
