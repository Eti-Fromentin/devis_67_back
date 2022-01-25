const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const messageController = require('../Controller/messageController');

router.post('/', asyncHandler(messageController.postMessage));

module.exports = router;
