const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findByPage = async (page) => {
  const result = await prisma.pages_content.findMany({
    orderBy: [
      {
        position: 'asc',
      },
    ],
    where: {
      page_name: page,
    },
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

module.exports = { findByPage };
