const { findForm } = require('../Model/formDevisModel');

const getForm = async (req, res) => {
  const category = req.params.category;
  if (category === 'Devis-Divers') {
    const defaultData = await findForm(category);
    res.status(200).json(defaultData);
  } else {
    const defaultData = await findForm('Devis-Divers');
    const data = await findForm(category);
    if (!data.length) {
      res.status(200).json(defaultData);
    } else {
      const result = [...defaultData, ...data];
      res.status(200).json(result);
    }
  }
};

module.exports = { getForm };
