const { SECRET } = require('../env');
const jwt = require('jsonwebtoken');
const { UnAuthorizedError } = require('./errors/errors-types');
const { findOneByEmail } = require('../Model/userModel');

const isAdminTokenValid = async (req, res, next) => {
  const id = req.params.id;
  if (!req.headers.authorization) {
    throw new UnAuthorizedError();
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      console.error(decoded);
      throw new UnAuthorizedError();
    }
    const decodedToken = jwt.decode(token, { complete: true });
    if (decodedToken.payload.id !== Number(id)) {
      throw new UnAuthorizedError();
    }
  });
  const user = await findOneByEmail(req.body.email);
  if (user.status !== 1) {
    throw new UnAuthorizedError();
  } else next();
};

module.exports = isAdminTokenValid;
