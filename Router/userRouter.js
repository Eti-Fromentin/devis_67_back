const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userController = require('../Controller/userController');

router.get('/', asyncHandler(userController.getOneByEmail));
router.post('/', asyncHandler(userController.postOneUser));

module.exports = router;
