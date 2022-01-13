const { SECRET } = require('../env');
const { verifyPassword } = require('../Model/auth');
const { findOneByEmail } = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const { UnAuthorizedError } = require('../Middlewares/errors/errors-types');

const logIn = async (req, res) => {
  console.log(req.body.password);
  const user = await findOneByEmail(req.body.email);
  const isVerified = await verifyPassword(user.password, req.body.password);
  if (isVerified) {
    const token = await createToken(user.id);
    res.set('AccessToken', token);
    res.set('Access-Control-Expose-Headers', 'AccessToken');
    res.status(200).json('loggedIn');
  } else {
    // res.status(204).json('null');
    throw new UnAuthorizedError();
  }
};

const createToken = (id) => {
  const token = jwt.sign({ id }, SECRET);
  return token;
};

module.exports = {
  logIn,
};
