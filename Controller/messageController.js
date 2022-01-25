const { createMessage } = require('../Model/messageModel');

const postMessage = async (req, res) => {
  const body = req.body;
  const message = await createMessage(body);
  res.status(201).json(message);
};

module.exports = { postMessage };
