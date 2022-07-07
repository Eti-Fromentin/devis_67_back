const { findPagesDetails, findAllDevisDynamicRoutes, findAllPageslink } = require('../Model/pagesDetailsModel');

const getPagesDetails = async (req, res) => {
  const name = req.params.name;
  const data = await findPagesDetails(name);
  if (!data.length) {
    const data = await findPagesDetails('Devis-Divers');
    res.status(200).json(data);
  }
  res.status(200).json(data);
};

const getDevisDynamicRoutes = async (req, res) => {
  const result = await findAllDevisDynamicRoutes();
  res.status(200).json(result);
};

const getAllPageslink = async (req, res) => {
  const result = await findAllPageslink();
  res.status(200).json(result);
};

module.exports = { getPagesDetails, getDevisDynamicRoutes, getAllPageslink };
