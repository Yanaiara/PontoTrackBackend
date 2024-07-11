const bcrypt = require('bcrypt');
const { User } = require('../models');

const createUser = async ({ firstName, lastName, email, password }) => {
  const existingUser = await User.findOne({where: {firstName, lastName}});
  if(existingUser) throw new Error("User with the same name already exists");
  
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
