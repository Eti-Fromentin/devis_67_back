const express = require('express');
const cors = require('cors');
const SERVER_PORT = 8000;
const { setupRoutes } = require('./Router');
const { errorMiddlewares } = require('./Middlewares');
// const handleDataNotFound = require('./Middlewares/handleDataNotFound');
// const handleBadRequest = require('./Middlewares/handleBadRequest');
// const handleInternalServer = require('./Mddlewares/handleInternalServerError');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);
errorMiddlewares(app);
// app.use(handleBadRequest);
// app.use(handleDataNotFound);
// app.use(handleInternalServer);

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
