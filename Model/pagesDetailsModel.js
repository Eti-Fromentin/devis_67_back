const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError, BadRequestError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findPagesDetails = async (name) => {
  const result = await prisma.pages.findMany({
    where: {
      shortUrl: name,
    },
  });
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

const findAllPageslink = async () => {
  const url = await prisma.pages.findMany();
  if (!url.length) {
    throw new DataNotFoundError();
  }
  return url;
};

const findOneByUrl = async (url) => {
  const result = await prisma.pages.findFirst({
    where: {
      shortUrl: url,
    },
  });
  return result;
};

const updatePagesRow = async (id, title, url) => {
  const result = await prisma.pages.update({
    where: {
      id: id,
    },
    data: {
      url: `/devis/${url}`,
      shortUrl: url,
      title: `Devis67.fr | Devis ${title}| Devis travaux ${title} en ligne à Strasbourg et alentours`,
      keywords: `${title}, devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur`,
    },
  });
  if (!result) {
    throw new BadRequestError();
  }
  return result;
};

const createPagesRow = async (title, url) => {
  const result = await prisma.pages.create({
    data: {
      url: `/devis/${url}`,
      shortUrl: url,
      title: `Devis67.fr | Devis ${title}| Devis travaux ${title} en ligne à Strasbourg et alentours`,
      keywords: `${title}, devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur`,
    },
  });
  if (!result) throw new BadRequestError();
  return result;
};

module.exports = { findPagesDetails, findAllDevisDynamicRoutes, findAllPageslink, findOneByUrl, updatePagesRow, createPagesRow };
