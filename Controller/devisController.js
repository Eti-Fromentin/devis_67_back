const { createDevis, findDevisById } = require('../Model/devisModel');

const postDevis = async (req, res) => {
  const body = req.body;
  const data = await createDevis(body);
  const result = await findDevisById(data.id);
  res.status(200).json(result);
};

module.exports = { postDevis };
