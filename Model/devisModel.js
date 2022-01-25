const { PrismaClient } = require('@prisma/client');
const { BadRequestError, DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const createDevis = async (body) => {
  const questionsAnswers = body.questionsAnswers;
  const defaultDevis = await prisma.devis.create({
    data: { ...body.default },
  });
  questionsAnswers.length && (await questionsAnswers.map((elt) => (elt['devis_id'] = defaultDevis.id)));
  console.log(questionsAnswers);
  const categDevis = await prisma.questions_answers.createMany({
    data: questionsAnswers,
  });

  if (!defaultDevis || !categDevis) {
    throw new BadRequestError();
  }
  return defaultDevis;
};

const findDevisById = async (id) => {
  const res = await prisma.devis.findUnique({
    where: {
      id: id,
    },
    include: {
      questions_answers: true, ////a terminer
    },
  });
  if (!res) {
    throw new DataNotFoundError();
  }
  return res;
};

module.exports = { createDevis, findDevisById };
