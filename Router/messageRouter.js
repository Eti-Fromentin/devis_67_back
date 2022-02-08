const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const messageController = require('../Controller/messageController');
const isAdminTokenValid = require('../Middlewares/isAdminTokenValid');

router.post('/', asyncHandler(messageController.postMessage));
router.get('/admin/:id', isAdminTokenValid, asyncHandler(messageController.findAllMessages));

module.exports = router;
