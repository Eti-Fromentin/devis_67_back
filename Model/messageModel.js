const { PrismaClient } = require('@prisma/client');
const Joi = require('joi');
/*const { DataNotFoundError } = require('../Middlewares/errors/errors-types');*/
const prisma = new PrismaClient();

const validateInputMessage = (data) => {
  return Joi.object({
    subject: Joi.string().max(45).presence('required'),
    text: Joi.string().max(1000).presence('required'),
    user_id: Joi.number().positive().presence('optional').allow(null),
    notregistered_user_email: Joi.string().email().max(55).presence('optional').allow(null),
    notregistered_user_name: Joi.string().max(55).presence('optional').allow(null),
  }).validate(data, { abortEarly: false }).error;
};

const createMessage = async (body) => {
  const message = await prisma.messages.create({
    data: {
      subject: body.subject,
      text: body.text,
      notregistered_user_name: body.notregistered_user_name && body.notregistered_user_name,
      notregistered_user_email: body.notregistered_user_email && body.notregistered_user_email,
      user: body.user_id && {
        connect: { id: body.user_id },
      },
    },
  });
  /*if (!result.length) {
    throw new DataNotFoundError();
  }*/
  return message;
};

module.exports = { createMessage, validateInputMessage };
