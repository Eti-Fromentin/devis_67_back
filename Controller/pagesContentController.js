const { findByPage } = require('../Model/pagesContentModel');

const getByPage = async (req, res) => {
  const page = req.params.page;
  const data = await findByPage(page);
  res.status(200).json(data);
};

module.exports = { getByPage };
