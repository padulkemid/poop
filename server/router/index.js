const express = require('express');

const allUsers = require('./all');

const router = express.Router();

router.use('/all', allUsers);

module.exports = router;
