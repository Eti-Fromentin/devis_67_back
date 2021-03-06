const { PrismaClient } = require('@prisma/client');
const Joi = require('joi');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const validateInputMessage = (data) => {
  return Joi.object({
    subject: Joi.string().max(45).presence('required'),
    text: Joi.string().max(1000).presence('required'),
    user_id: Joi.number().positive().presence('optional').allow(null),
    sender_email: Joi.string().email().max(55).presence('optional').allow(null),
    sender_name: Joi.string().max(55).presence('optional').allow(null),
  }).validate(data, { abortEarly: false }).error;
};

const createMessage = async (body) => {
  const message = await prisma.messages.create({
    data: {
      subject: body.subject,
      text: body.text,
      sender_name: body.sender_name,
      sender_email: body.sender_email,
      user_id: body.user_id ? body.user_id : undefined,
    },
  });
  return message;
};

const putMessage = async (data) => {
  const updatedMessage = await prisma.messages.update({
    where: {
      id: data.id,
    },
    data: {
      statut: data.statut,
    },
  });
  return updatedMessage;
};

const getAllMessages = async () => {
  const messages = await prisma.messages.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  });
  if (!messages.length) {
    throw new DataNotFoundError();
  }
  return messages;
};

module.exports = { createMessage, validateInputMessage, getAllMessages, putMessage };
