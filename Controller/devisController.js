const { createDevis } = require('../Model/devisModel');

const postDevis = async (req, res) => {
  const body = req.body;
  const data = await createDevis(body);
  res.status(200).json(data);
};

module.exports = { postDevis };
