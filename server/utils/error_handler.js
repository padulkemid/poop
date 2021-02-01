// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  switch (err.code) {
    case '42P01':
      res.status(404).json({
        status: 404,
        error: err.message,
      });
      break;
    default:
      res.status(500).json({
        status: 500,
        error: 'Interal Server Error!',
      });
  }
};

module.exports = errorHandler;
