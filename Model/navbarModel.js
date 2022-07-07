const { PrismaClient } = require('@prisma/client');
const { DataNotFoundError } = require('../Middlewares/errors/errors-types');
const prisma = new PrismaClient();

const findAll = async () => {
  const results = await prisma.navbar.findMany({
    orderBy: [
      {
        position: 'asc',
      },
    ],
    include: {
      pages: {
        select: {
          url: true,
        },
      },
    },
  });
  if (!results.length) {
    throw new DataNotFoundError();
  }
  return results;
};

const findOneById = async (id) => {
  const result = await prisma.navbar.findFirst({
    where: {
      id: id,
    },
  });
  if (!result.length) {
    throw new DataNotFoundError();
  }
  return result;
};

const putDataNavbar = async (data) => {
  const pageid = await prisma.pages.findFirst({
    where: {
      url: data.pages,
    },
  });
  const results = await prisma.navbar.update({
    where: { id: data.id },
    data: {
      position: data.position,
      text: data.text,
      visible: data.visible,
      pagetype: data.pagetype,
      pages_id: pageid.id,
    },
  });
  return results;
};

const postNavbarData = async (data) => {
  const row = await prisma.navbar.create({
    data: data,
  });
  return row;
};

const deleteRow = async (id) => {
  const row = await prisma.navbar.delete({
    where: {
      id: id,
    },
  });
  return row;
};

module.exports = { findAll, findOneById, putDataNavbar, postNavbarData, deleteRow };
