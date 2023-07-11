
const express = require('express');
const router = express.Router();
const logInController = require('../controllers/logInController');

router.post('/request-otp', logInController.postOtp);
module.exports = router;

