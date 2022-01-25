const { PrismaClient } = require('@prisma/client');
/*const { DataNotFoundError } = require('../Middlewares/errors/errors-types');*/
const prisma = new PrismaClient();

const createMessage = async (body) => {
  const message = await prisma.messages.create({
    data: body,
  });
  return message;
};

module.exports = { createMessage };
