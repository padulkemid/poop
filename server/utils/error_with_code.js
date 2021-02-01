class ErrorWithCode extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'ErrorWithCode';
    this.code = code;
  }
}

module.exports = ErrorWithCode;
