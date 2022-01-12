const { BadRequestError } = require('../Middlewares/errors/errors-types');
const { findOneByEmail, createOne, validateInputUser } = require('../Model/userModel');

const getOneByEmail = async (req, res) => {
  const email = req.body.email;
  const data = await findOneByEmail(email);
  res.status(200).json(data);
};

const postOneUser = async (req, res) => {
  const validation = await validateInputUser(req.body);
  const existingUser = await findOneByEmail(req.body.email);
  if (existingUser === false && validation === true) {
    const user = await createOne(req.body);
    res.status(201).json({ id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email });
  } else {
    throw new BadRequestError();
  }
};

module.exports = { getOneByEmail, postOneUser };
