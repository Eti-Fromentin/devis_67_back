const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const postCategory = async (data) => {
  const category = await prisma.categories_devis_provider.create({
    data: {
      title: data.title,
      alias: data.title,
    },
  });
  return category;
};

const deleteRow = async (id) => {
  const category = await prisma.categories_devis_provider.delete({
    where: {
      id: id,
    },
  });
  return category;
};

const updateRow = async (data) => {
  const id = data.id;
  const category = await prisma.categories_devis_provider.update({
    where: {
      id: id,
    },
    data: {
      alias: data.alias,
      title: data.title,
      position: data.position,
    },
  });
  return category;
};

module.exports = { postCategory, deleteRow, updateRow };
