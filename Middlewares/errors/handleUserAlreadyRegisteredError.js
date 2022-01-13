const { UserAlreadyRegistered } = require('./errors-types');

module.exports = (err, req, res, next) => {
  if (err instanceof UserAlreadyRegistered) {
    res.status(400).send('User already exist');
  }
  return next(err);
};
