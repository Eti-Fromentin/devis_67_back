const express = require('express');
const cors = require('cors');
const SERVER_PORT = 8000;
const { setupRoutes } = require('./Router');
const handleRecordNotFound = require('./Middlewares/handleRecordNotFound');
const handleBadRequest = require('./Middlewares/handleBadRequest');
const handleInternalServer = require('./mMddlewares/handleInternalServerError');
const handleUnAuthorizedError = require('./Middlewares/handleUnAuthorizedError');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

app.use(handleBadRequest);
app.use(handleRecordNotFound);
app.use(handleUnAuthorizedError);
app.use(handleInternalServer);

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on : ${SERVER_PORT}`);
});

process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});

process.on('beforeExit', () => {
  app.close((error) => {
    if (error) console.error(JSON.stringify(error), error.stack);
  });
});

module.exports = server;
