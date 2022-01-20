const { findAllVisible } = require('../Model/pagesContentModel');

const getAllVisible = async (req, res) => {
  const data = await findAllVisible();
  res.status(200).json(data);
};

module.exports = { getAllVisible };
