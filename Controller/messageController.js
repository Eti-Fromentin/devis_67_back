const { createMessage, validateInputMessage } = require('../Model/messageModel');
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

module.exports = { postMessage };
