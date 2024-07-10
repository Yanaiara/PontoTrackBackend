const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const User = require('./User')(sequelize);

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Database & tables created!');
};

module.exports = {
  sequelize,
  User,
  initDb
};
