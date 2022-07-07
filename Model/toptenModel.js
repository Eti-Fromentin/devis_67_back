const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.top_ten.findMany({
    orderBy: [
      {
        position: 'asc',
      },
    ],
    include: {
      categories_devis_provider: {
        include: {
          pages: {
            select: {
              url: true,
            },
          },
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
