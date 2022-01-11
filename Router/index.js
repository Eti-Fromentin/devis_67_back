const navbarRouter = require('./navbarRouter');
const footerRouter = require('./footerRouter');
const conditionsRouter = require('./conditionsRouter');
const legalRouter = require('./legalRouter');

const setupRoutes = (app) => {
  app.use('/api/navbar', navbarRouter);
  app.use('/api/footer', footerRouter);
  app.use('./api/conditions', conditionsRouter);
  app.use('./api/legal', legalRouter);
};

module.exports = { setupRoutes };
