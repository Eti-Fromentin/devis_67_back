const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
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
    include: {
      formulaire_join_answer: {
        include: {
          formulaire_possible_answer: true,
        },
      },
    },
  });
  if (!result.length) {
    throw new DataNotFoundError();
  }
  return result;
};

module.exports = { findForm };
