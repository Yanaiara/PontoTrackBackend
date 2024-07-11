const express = require('express');
const router = express.Router();
const ClockInController = require('../controllers/ClockInController');

router.post('/clock-in', ClockInController.clockIn);
router.post('/clock-out', ClockInController.clockOut);

module.exports = router;
