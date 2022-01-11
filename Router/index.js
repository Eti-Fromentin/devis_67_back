const navbarRouter = require('./navbarRouter');
const footerRouter = require('./footerRouter');
const homeDevisRouter = require('./homeDevisRouter');
const pagesContentRouter = require('./pagesContentRouter');
const userRouter =  require('./userRouter');

const setupRoutes = (app) => {
  app.use('/api/navbar', navbarRouter);
  app.use('/api/footer', footerRouter);
  app.use('/api/homedevis', homeDevisRouter);
  app.use('/api/pagescontent', pagesContentRouter);
  app.use('/api/user', userRouter);
};

module.exports = { setupRoutes };
