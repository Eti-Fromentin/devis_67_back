const argon2 = require('argon2');

const hashPassword = async (password) => {
  try {
    console.log(password);
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const verifyPassword = async (hash, password) => {
  // console.log(hash);
  // console.log(password);
  try {
    if (await argon2.verify(hash, password)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { hashPassword, verifyPassword };
