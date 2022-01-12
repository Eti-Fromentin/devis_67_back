const { findOneByEmail, createOne } = require('../Model/userModel');

const getOneByEmail = async (req, res) => {
  const mail = req.params.mail;
  const data = await findOneByEmail(mail);
  res.status(200).json(data);
};

const postOneUser = async (req, res) => {
  const user = await createOne(req.body);
  res.status(201).json(user);
};

module.exports = { getOneByEmail, postOneUser };
