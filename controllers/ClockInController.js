const ClockInService = require('../services/ClockInService');

const clockIn = async (req, res) => {
  const { userId, latitude, longitude } = req.body;
  try {
    const clockIn = await ClockInService.createClockIn({ userId, latitude, longitude });
    res.status(201).json(clockIn);
  } catch (error) {
    res.status(500).json({ error: 'Clock-in failed' });
  }
};

module.exports = {
  clockIn
};
