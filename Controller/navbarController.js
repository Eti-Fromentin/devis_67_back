const { findAll } = require('../Model/navbarModel');

const getAll = async (req, res) => {
  const data = await findAll();
  res.status(200).json(data);
};

module.exports = { getAll };
