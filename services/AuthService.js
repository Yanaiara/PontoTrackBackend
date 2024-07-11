const bcrypt = require('bcrypt');
const { User } = require('../models');

const createUser = async ({ firstName, lastName, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword
  });
};

const findUserByEmail = async (email) => {
  return User.findOne({ where: { email } });
};

const validatePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  createUser,
  findUserByEmail,
  validatePassword
};
