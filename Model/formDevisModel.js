const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findForm = async (category) => {
  const result = await prisma.formulaire_devis.findMany({
    where: {
      categories_devis_provider: {
        pages: {
          shortUrl: category,
        },
      },
    },
    orderBy: [
      {
        position: 'asc',
      },
    ],
    include: {
      formulaire_join_answer: {
        orderBy: [
          {
            position: 'asc',
          },
        ],
        include: {
          formulaire_possible_answer: true,
        },
      },
    },
  });
  return result;
};

module.exports = { findForm };
