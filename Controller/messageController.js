const { createMessage, validateInputMessage, getAllMessages, putMessage } = require('../Model/messageModel');
const { BadRequestError } = require('../Middlewares/errors/errors-types');

const postMessage = async (req, res) => {
  const body = req.body;
  const validation = await validateInputMessage(body);
  if (!validation) {
    const message = await createMessage(body);
    res.status(201).json(message);
  } else {
    throw new BadRequestError();
  }
};

const findAllMessages = async (req, res) => {
  const messages = await getAllMessages();
  res.status(200).json(messages);
};

const updateMessage = async (req, res) => {
  console.log(req.body);
  const updatedMessage = await putMessage(req.body);
  if (!updatedMessage) {
    throw new BadRequestError();
  }
  res.status(200).send(updatedMessage);
};

module.exports = { postMessage, findAllMessages, updateMessage };
