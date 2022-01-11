const { DataNotFoundError } = require('../errors-types');

module.exports = (err, req, res, next) => {
  if (err instanceof DataNotFoundError) {
    console.error(err);
    res.status(404).send('No data found for this request');
  } else {
    next(err);
  }
};
