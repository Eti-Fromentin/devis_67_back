const { SECRET } = require('../env');
const jwt = require('jsonwebtoken');
const { UnAuthorizedError } = require('./errors/errors-types');

const isTokenValid = (req, res, next) => {
  if (!req.headers.authorization) {
    throw new UnAuthorizedError();
  } else {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        console.error(decoded);
        throw new UnAuthorizedError();
      } else {
        next();
      }
    });
  }
};

module.exports = isTokenValid;
