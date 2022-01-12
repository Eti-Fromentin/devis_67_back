const handleDataNotFound = require('./errors/handleDataNotFound');
const handleBadRequest = require('./errors/handleBadRequest');
const handleInternalServer = require('./errors/handleInternalServerError');

const errorMiddlewares = (app) => {
  app.use(handleBadRequest);
  app.use(handleDataNotFound);
  app.use(handleInternalServer);
};

module.exports = { errorMiddlewares };
