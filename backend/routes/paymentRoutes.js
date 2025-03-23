const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController.js');

router.post('/', paymentController.processPayment);

module.exports = router;
