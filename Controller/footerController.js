const { findAll } = require('../Model/footerModel');

const getAll = async (req, res) => {
  try {
    const data = await findAll();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send('Internal server error');
  }
};

module.exports = { getAll };
