const badRequest = (err, res) => {
  return res.status(400).json({
    status: 400,
    error: err.message,
  });
};

const notFound = (err, res) => {
  return res.status(404).json({
    status: 404,
    error: err.message,
  });
};

const internalServerError = (err, res) => {
  return res.status(500).json({
    status: 500,
    error: err.message,
  });
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  switch (err.code) {
    case '400':
      badRequest(err, res);
      break;
    case '404':
      notFound(err, res);
      break;
    case '42P01':
      notFound(err, res);
      break;
    default:
      internalServerError(err, res);
  }
};

module.exports = errorHandler;
