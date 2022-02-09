const { BadRequestError } = require('../Middlewares/errors/errors-types');
const { postCategory, deleteRow } = require('../Model/categoriesModel');
const { findOneByUrl, updatePagesRow, createPagesRow } = require('../Model/pagesDetailsModel');

const createCategory = async (req, res) => {
  const body = req.body;
  const category = await postCategory(body);
  if (!category) throw new BadRequestError();
  res.status(201).json(category);
};

const deleteCategory = async (req, res) => {
  const data = req.body;
  await deleteRow(data.id);
  res.status(204).send('Deleted');
};

const updateCategory = async (req, res) => {
  const data = req.body;
  console.log('data', data);
  const result = data.map(async (elt) => {
    const shortUrl = await elt.title.replace(/ - /g, '-').replace(/ /g, '-');
    console.log('short', shortUrl);
    await findOneByUrl(shortUrl).then((url) => {
      if (url) {
        console.log('url', url);
        updatePagesRow(url.id, elt.title, shortUrl);
      } else {
        createPagesRow(elt.title, shortUrl);
      }
    });
    return result;
  });
  res.status(200).json(result);
};

module.exports = { createCategory, deleteCategory, updateCategory };
