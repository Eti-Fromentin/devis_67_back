const navbarRouter = require('./navbarRouter');
const footerRouter = require('./footerRouter');
const homeDevisRouter = require('./homeDevisRouter');
const pagesContentRouter = require('./pagesContentRouter');


const setupRoutes = (app) => {
  app.use('/api/navbar', navbarRouter);
  app.use('/api/footer', footerRouter);
  app.use('/api/homedevis', homeDevisRouter);
  app.use('/api/pagescontent', pagesContentRouter);
};

module.exports = { setupRoutes };
