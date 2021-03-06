const handleDataNotFound = require('./errors/handleDataNotFound');
const handleBadRequest = require('./errors/handleBadRequest');
const handleInternalServer = require('./errors/handleInternalServerError');
const handleUnAuthorizedError = require('./errors/handleUnAuthorizedError');
const handleUserAlreadyRegisteredError = require('./errors/handleUserAlreadyRegisteredError');

const errorMiddlewares = (app) => {
  app.use(handleBadRequest);
  app.use(handleUserAlreadyRegisteredError);
  app.use(handleUnAuthorizedError);
  app.use(handleDataNotFound);
  app.use(handleInternalServer);
};

module.exports = { errorMiddlewares };
