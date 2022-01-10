const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.navbar.findMany({
    include: {
      pages: {
        select: {
          url: true,
        },
      },
    },
  });
  return result;
};

module.exports = { findAll };
