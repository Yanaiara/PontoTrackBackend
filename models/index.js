const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const User = require('./User')(sequelize);
const ClockIn = require('./ClockIn')(sequelize);

User.hasMany(ClockIn, { foreignKey: 'userId' });
ClockIn.belongsTo(User, { foreignKey: 'userId' });

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Database & tables created!');
};

module.exports = {
  sequelize,
  User,
  ClockIn,
  initDb
};
