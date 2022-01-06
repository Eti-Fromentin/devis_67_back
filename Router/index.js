const navbarRouter = require('./navbarRouter');

const setupRoutes = (app) => {
  app.use('/api/navbar', navbarRouter);
};

module.exports = { setupRoutes };
