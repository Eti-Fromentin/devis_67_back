const handleDataNotFound = require('./handleDataNotFound');
const handleBadRequest = require('./handleBadRequest');
const handleInternalServer = require('./handleInternalServerError');

const errorMiddlewares = (app) => {
  app.use(handleBadRequest);
  app.use(handleDataNotFound);
  app.use(handleInternalServer);
};

module.exports = { errorMiddlewares };
