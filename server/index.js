const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.json({
    status: 201,
    message: '💩 Poop is coming soon! stay tune!',
  });
});

app.listen(port);
