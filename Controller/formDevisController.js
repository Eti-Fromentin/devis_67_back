const { findForm } = require('../Model/formDevisModel');

const getForm = async (req, res) => {
  const category = req.params.category;
  const data = await findForm(category);
  res.status(200).json(data);
};

module.exports = { getForm };
