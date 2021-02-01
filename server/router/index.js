const express = require('express');

const all = require('./all');
const errorHandler = require('~utils/error_handler');

const router = express.Router();

router.use(all);
router.use(errorHandler);

module.exports = router;
