const express = require('express');

const router = express.Router();
const dataController = require('../controllers/DataController');

router.post('/', dataController.generateData);

module.exports = router;
