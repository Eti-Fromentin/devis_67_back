const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../errors-types');
const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.footer.findMany({
    include: {
      pages: {
        select: {
          url: true,
        },
      },
    },
  });
  if (!result.length) {
    throw new DataNotFoundError();
  }
  return result;
};

module.exports = { findAll };
