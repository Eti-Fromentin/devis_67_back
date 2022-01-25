const { findPagesDetails } = require('../Model/pagesDetailsModel');

const getPagesDetails = async (req, res) => {
  const name  = req.params.name;
  const data = await findPagesDetails(name);
  res.status(200).json(data);
};


module.exports = { getPagesDetails };