const { BadRequestError } = require('../errors-types');

module.exports = (err, req, res, next) => {
  if (err instanceof BadRequestError) {
    console.error(err);
    res.status(400).send('Bad request');
  } else {
    next(err);
  }
};
