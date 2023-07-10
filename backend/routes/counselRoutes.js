const express = require('express');
const router = express.Router();
const counselController = require('../controllers/counselController');

router.get('/:userName', counselController.getCounsels);
router.post('/:userName', counselController.postCounsel);
router.delete('/:userName/:counselId', counselController.deleteCounsel);

module.exports = router;