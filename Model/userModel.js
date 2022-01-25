const { PrismaClient } = require('@prisma/client');
const Joi = require('joi');
const { hashPassword } = require('./auth');
const { DataNotFoundError, BadRequestError, UserAlreadyRegistered } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const validateInputUser = (data, forCreation = true) => {
  const presence = forCreation ? 'required' : 'optional';
  return Joi.object({
    firstname: Joi.string().max(45).presence(presence),
    lastname: Joi.string().max(45).presence(presence),
    email: Joi.string().email().max(60).presence(presence),
    phone: Joi.number().positive().presence('optional').allow(null),
    address: Joi.string().max(100).presence('optional').allow(null),
    postalcode: Joi.number().presence(presence).allow(null),
    city: Joi.string().max(255).presence('optional').allow(null),
    password: Joi.string().min(8).max(50).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const findOneByEmail = async (email, checking = false) => {
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (result && checking === true) {
    throw new UserAlreadyRegistered();
  } else if (!result && checking === false) {
    throw new BadRequestError();
  } else return result;
};

const findOneById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      messages: true,
      devis: { include: { questions_answers: true } },
    },
  });
  if (!user) {
    throw new DataNotFoundError();
  }
  return user;
};

const createOne = async (body) => {
  body.password = await hashPassword(body.password);
  const res = await prisma.user.create({
    data: { ...body },
  });
  return res;
};

module.exports = { findOneByEmail, findOneById, createOne, validateInputUser };
