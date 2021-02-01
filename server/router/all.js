const express = require('express');

const { orders } = require('../api');

const router = express.Router();

router.get('/orders', orders.allOrders);

module.exports = router;
