const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllVisible = async () => {
  const result = await prisma.footer.findMany({
    select: {
      text: true,
      position: true,
      pages: {
        select: {
          url: true,
        },
      },
    },
    where: {
      visible: 1,
    },
  });
  return result;
};

module.exports = { findAllVisible };
