const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('ClockIn', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clockIn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    clockOut: {
      type: DataTypes.DATE,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  });
};
