const { BadRequestError } = require('../Middlewares/errors/errors-types');
const { findOneByEmail, createOne, validateInputUser, findOneById } = require('../Model/userModel');

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
  });
};

const postOneUser = async (req, res) => {
  const existingUser = await findOneByEmail(req.body.email, true);
  const validation = await validateInputUser(req.body);
  if (existingUser === false && !validation) {
    const user = await createOne(req.body);
    res.status(201).json({ id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email });
  } else {
    throw new BadRequestError();
  }
};

module.exports = { getOneByEmail, postOneUser, getOneById };
