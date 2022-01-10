const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllVisible = async () => {
  const result = await prisma.pages_content.findMany({
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

module.exports = { findAllVisible };
