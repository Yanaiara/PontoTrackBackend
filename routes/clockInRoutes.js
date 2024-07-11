const express = require('express');
const router = express.Router();
const ClockInController = require('../controllers/ClockInController');

router.post('/clock-in', ClockInController.clockIn);

module.exports = router;
