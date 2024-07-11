const { ClockIn } = require('../models');
const { Op } = require('sequelize');

const calculateDailyHours = (clockIns) => {
  const report = {};
  const workdayHours = 8;

  clockIns.forEach(clockIn => {
    const date = clockIn.clockIn.toISOString().split('T')[0];
    if (!report[date]) {
      report[date] = { totalHours: 0, positiveHours: 0, negativeHours: 0 };
    }

    if (clockIn.clockOut) {
      const workedHours = (clockIn.clockOut - clockIn.clockIn) / (1000 * 60 * 60);
      report[date].totalHours += workedHours;

      const hoursDifference = workedHours - workdayHours;
      if (hoursDifference > 0) {
        report[date].positiveHours += hoursDifference;
      } else {
        report[date].negativeHours += Math.abs(hoursDifference);
      }
    }
  });

  return report;
};

const getWeeklyReport = async (userId, startDate) => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 5);

  const clockIns = await ClockIn.findAll({
    where: {
      userId,
      clockIn: {
        [Op.between]: [new Date(startDate), endDate]
      }
    },
    order: [['clockIn', 'ASC']]
  });

  const dailyReport = calculateDailyHours(clockIns);

  let weeklyPositiveHours = 0;
  let weeklyNegativeHours = 0;

  for (const date in dailyReport) {
    weeklyPositiveHours += dailyReport[date].positiveHours;
    weeklyNegativeHours += dailyReport[date].negativeHours;
  }

  return { dailyReport, weeklyPositiveHours, weeklyNegativeHours };
};

module.exports = {
  getWeeklyReport
};
