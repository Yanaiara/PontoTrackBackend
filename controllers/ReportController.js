const ReportService = require('../services/ReportService');

const getWeeklyReport = async (req, res) => {
  const { userId, startDate } = req.query;

  try {
    const report = await ReportService.getWeeklyReport(userId, startDate);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
};

module.exports = {
  getWeeklyReport
};
