require('dotenv').config();

const getEnv = (variable) => {
  const value = process.env[variable];
  return value;
};

const SERVER_PORT = getEnv('SERVER_PORT');
const SECRET = getEnv('SECRET');

module.exports = {
  SERVER_PORT,
  SECRET,
};
