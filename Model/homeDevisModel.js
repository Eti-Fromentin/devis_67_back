const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.home_devis.findMany({
    orderBy: [
      {
        position: 'asc',
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

const findCategLink = async () => {
  const result = await prisma.categories_devis_provider.findMany({
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

module.exports = { findAll, findCategLink };
