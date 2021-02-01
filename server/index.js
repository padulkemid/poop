const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./router');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port);
