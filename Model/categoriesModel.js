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

module.exports = { postCategory, deleteRow };
