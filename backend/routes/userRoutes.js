const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:phoneNumber', userController.getUser);
router.post('/:phoneNumber', userController.postUser);

module.exports = router;