// const { SECRET } = require('../env');
const { verifyPassword } = require('../Model/auth');
const { findOneByEmail } = require('../Model/userModel');

const logIn = async (req, res) => {
  const user = await findOneByEmail(req.body.mail);
  const isVerified = await verifyPassword(user.password, req.body.password);
  console.log(user);
  if (isVerified) {
    res.status(200).json('loggedIn');
  } else {
    res.status(204).json('null');
  }
};

module.exports = {
  logIn,
};
