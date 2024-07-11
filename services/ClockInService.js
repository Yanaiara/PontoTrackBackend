const { ClockIn } = require('../models');

const createClockIn = async ({ userId, latitude, longitude }) => {
  return ClockIn.create({
    userId,
    latitude,
    longitude
  });
};

module.exports = {
  createClockIn
};
