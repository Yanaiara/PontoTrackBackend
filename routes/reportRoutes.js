const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController');

router.get('/weekly-report', ReportController.getWeeklyReport);

module.exports = router;
