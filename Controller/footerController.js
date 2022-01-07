const { findAllVisible } = require('../Model/footerModel');

const getAllVisible = async (req, res) => {
  try {
    const data = await findAllVisible();
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
};

module.exports = { getAllVisible };
