const { findForm } = require('../Model/formDevisModel');

const getForm = async (req, res) => {
  const data = await findForm();
  res.status(200).json(data);
};

module.exports = { getForm };
