const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const findAll = async () => {
  const result = await prisma.footer.findMany();
  return result;
};

module.exports = { findAll };
