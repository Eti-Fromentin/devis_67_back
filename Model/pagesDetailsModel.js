const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findPagesDetails = async (name) => {
  const result = await prisma.pages.findMany({
    where: {
      shortUrl: name,
    },
  });
  if (!result.length) {
    throw new DataNotFoundError();
  }
  return result;
};

const findAllDevisDynamicRoutes = async () => {
  const result = await prisma.pages.findMany();
  if (!result.length) {
    throw new DataNotFoundError();
  }
  const routes = await result.filter((elt) => elt.url.includes('/devis/'));
  return routes;
};

module.exports = { findPagesDetails, findAllDevisDynamicRoutes };
