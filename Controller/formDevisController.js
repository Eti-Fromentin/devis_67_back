const { findForm } = require('../Model/formDevisModel');

const getForm = async (req, res) => {
  const category = req.params.category;
  if (category === 'devis-divers') {
    const data = await findForm(category);
    res.status(200).json(data);
  } else {
    const defaultData = await findForm('devis-divers');
    const data = await findForm(category);
    const result = [...defaultData, ...data];
    res.status(200).json(result);
  }
};

module.exports = { getForm };
