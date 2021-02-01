const express = require('express');

const allUsers = require('./all');
const errorHandler = require('~utils/error_handler');

const router = express.Router();

router.use('/all', allUsers);
router.use(errorHandler);

module.exports = router;
