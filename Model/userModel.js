const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('./auth');
const { DataNotFoundError, BadRequestError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findOneByEmail = async (mail) => {
  const result = await prisma.user.findUnique({
    where: {
      mail: mail,
    },
  });
  if (!result.length) {
    throw new DataNotFoundError();
  }
  return result;
};

const findOneById = async (id) => {
  const user = await prisma.user.findMany({
    where: {
      id: id,
    },
  });
  if (!user.length) {
    throw DataNotFoundError();
  }
  return user;
};

const createOne = async (body) => {
  body.password = await hashPassword(body.password);
  const res = await prisma.user.create({
    data: { ...body },
  });
  console.log(res);
  if (!res) {
    throw new BadRequestError();
  }
  return res;
};

module.exports = { findOneByEmail, findOneById, createOne };
