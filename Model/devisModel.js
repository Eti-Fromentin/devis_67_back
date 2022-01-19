const { PrismaClient } = require('@prisma/client');
const { BadRequestError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const createDevis = async (body) => {
  const res = await prisma.devis.create({
    data: { ...body },
  });
  if (!res) {
    throw new BadRequestError();
  }
  return res;
};

module.exports = { createDevis };
