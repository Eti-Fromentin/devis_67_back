const { findAll, findCategLink } = require('../Model/homeDevisModel');

const getAll = async (req, res) => {
  const data = await findAll();
  res.status(200).json(data);
};

const getCategLink = async (req, res) => {
  const data = await findCategLink();
  res.status(200).json(data);
};

module.exports = { getAll, getCategLink };
