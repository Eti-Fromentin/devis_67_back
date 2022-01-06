// const navbarRouter = require('./navbarRouter');
const footerRouter = require('./footerRouter');

const setupRoutes = (app) => {
  // app.use('/api/navbar', navbarRouter);
  app.use('/api/footer', footerRouter);
};

module.exports = { setupRoutes };
