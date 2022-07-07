const { BadRequestError } = require('../Middlewares/errors/errors-types');
const { findAll, putDataNavbar, postNavbarData, deleteRow } = require('../Model/navbarModel');

const getAll = async (req, res) => {
  const data = await findAll();
  const result = data.map((elt) => ({
    id: elt.id,
    position: elt.position,
    text: elt.text,
    visible: elt.visible,
    pagetype: elt.pagetype,
    pages: elt.pages.url,
  }));
  res.status(200).json(result);
};

const updateNavbarData = async (req, res) => {
  const data = req.body;
  const results = await data.map((elt) => putDataNavbar(elt));
  if (!results.length) {
    throw new BadRequestError();
  }
  res.status(200).send(results);
};

const createNavbarData = async (req, res) => {
  const data = req.body;
  const result = await postNavbarData(data);
  if (!result) throw new BadRequestError();
  res.status(201).json(result);
};

const deleteNavbarData = async (req, res) => {
  const data = req.body;
  await deleteRow(data.id);
  res.status(204).send('Deleted');
};

module.exports = { getAll, updateNavbarData, createNavbarData, deleteNavbarData };
