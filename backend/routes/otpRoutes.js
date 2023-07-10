
const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/request-otp', otpController.postOtp);
module.exports = router;

