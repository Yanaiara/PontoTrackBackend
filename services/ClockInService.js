const { ClockIn } = require('../models');

const createClockIn = async ({ userId, latitude, longitude }) => {
  return ClockIn.create({
    userId,
    latitude,
    longitude
  });
};

const updateClockOut = async ({ userId }) => {
  const clockIn = await ClockIn.findOne({
    where: { userId },
    order: [['clockIn', 'DESC']],
  });
  if (clockIn) {
    clockIn.clockOut = new Date();
    await clockIn.save();
    return clockIn;
  } else {
    throw new Error('No clock-in found for user');
  }
};

module.exports = {
  createClockIn,
  updateClockOut
};
