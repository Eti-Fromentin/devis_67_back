const { BadRequestError } = require('../Middlewares/errors/errors-types');
const { findOneByEmail, createOne, validateInputUser, findOneById, findAllUser } = require('../Model/userModel');

const getOneByEmail = async (req, res) => {
  const email = req.body.email;
  const data = await findOneByEmail(email);
  res.status(200).json(data);
};

const getOneById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await findOneById(id);
  res.status(200).json({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    address: user.address,
    postalcode: user.postalcode,
    city: user.city,
    messages: user.messages,
    devis: user.devis,
  });
};

const postOneUser = async (req, res) => {
  await findOneByEmail(req.body.email, true);
  const validation = await validateInputUser(req.body);
  if (!validation) {
    const user = await createOne(req.body);
    res.status(201).json({ id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, phone: user.phone });
  } else {
    throw new BadRequestError();
  }
};

const getAllUser = async (req, res) => {
  const data = await findAllUser();
  res.status(200).send(data);
};

module.exports = { getOneByEmail, postOneUser, getOneById, getAllUser };
