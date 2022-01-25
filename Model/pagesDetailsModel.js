const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findPagesDetails = async (name) => {
  const result = await prisma.pages.findMany({
    where: {
      shortUrl: name,
    },
  });
  if (!result.length) {
    throw new DataNotFoundError();
  }
  return result;
};

module.exports = { findPagesDetails };
