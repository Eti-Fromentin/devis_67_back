const mysql = require('../db');

const findAll = async () => {
  const result = await mysql.query('SELECT * FROM navbar');
  return result[0];
};

module.exports = findAll;
