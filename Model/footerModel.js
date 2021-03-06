const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.footer.findMany({
    orderBy: [
      {
        section: 'asc',
      },
    ],
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
