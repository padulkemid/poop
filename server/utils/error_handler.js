const notFound = (err, res) => {
  return res.status(404).json({
    status: 404,
    error: err.message,
  });
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  switch (err.code) {
    case '404':
      notFound(err, res);
      break;
    case '42P01':
      notFound(err, res);
      break;
    default:
      res.status(500).json({
        status: 500,
        error: 'Interal Server Error!',
        cause: err.message,
      });
  }
};

module.exports = errorHandler;
