const { findAll } = require('../Model/toptenModel');

const getAll = async (req, res) => {
  const data = await findAll();
  const result = data.map((elt) => ({
    position: elt.position,
    visible: elt.visible,
    text: elt.categories_devis_provider.title,
    url: elt.categories_devis_provider.pages.url,
  }));
  res.status(200).json(result);
};

module.exports = { getAll };
