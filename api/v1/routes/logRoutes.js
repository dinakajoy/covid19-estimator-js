const express = require('express');

const router = express.Router();
const logController = require('../controllers/LogController');

router.post('/', logController.logData);

module.exports = router;
