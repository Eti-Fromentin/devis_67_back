const navbarRouter = require('./navbarRouter');
const footerRouter = require('./footerRouter');
const homeDevisRouter = require('./homeDevisRouter');
const pagesContentRouter = require('./pagesContentRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const formDevisRouter = require('./formDevisRouter');
const devisRouter = require('./devisRouter');
const pagesDetailsRouter = require('./pagesDetailsRouter');
const messageRouter = require('./messageRouter');
const toptenRouter = require('./toptenRouter');
const categoriesRouter = require('./categoriesRouter');

const setupRoutes = (app) => {
  app.use('/api/navbar', navbarRouter);
  app.use('/api/footer', footerRouter);
  app.use('/api/homedevis', homeDevisRouter);
  app.use('/api/pagescontent', pagesContentRouter);
  app.use('/api/user', userRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/form', formDevisRouter);
  app.use('/api/devis', devisRouter);
  app.use('/api/pagesdetails', pagesDetailsRouter);
  app.use('/api/message', messageRouter);
  app.use('/api/topten', toptenRouter);
  app.use('/api/categories', categoriesRouter);
};

module.exports = { setupRoutes };
