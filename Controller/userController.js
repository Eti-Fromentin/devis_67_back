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
  const result = data.map((elt) => ({
    id: elt.id,
    isAdmin: elt.isAdmin,
    created_at: elt.created_at,
    firstname: elt.firstname,
    lastname: elt.lastname,
    email: elt.email,
    phone: elt.phone,
    address: elt.address,
    postalcode: elt.postalcode,
    city: elt.city,
    status: elt.status,
    messages: elt.messages,
    devis: elt.devis,
  }));
  res.status(200).send(result);
};

module.exports = { getOneByEmail, postOneUser, getOneById, getAllUser };
