const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.home_devis.findMany({
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
