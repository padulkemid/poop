const ErrorWithCode = require('./error_with_code');

const checkColumnAvailability = (arr, obj) => {
  arr.forEach((key) => {
    if (!(key in obj)) {
      throw new ErrorWithCode('400', `Invalid syntax! is ${key} valid?`);
    }
  });
};

const checkColumnHasKey = (arr, key) => {
  const keyCheck = arr.find((el) => el === key);

  if (!keyCheck) throw new ErrorWithCode('400', 'Column not exist!');
};

const checkColumnHasLength = (col) => {
  if (!col || !col.length) {
    throw new ErrorWithCode(
      '400',
      'Invalid syntax! some column appears to be empty.'
    );
  }
};

module.exports = {
  checkColumnAvailability,
  checkColumnHasLength,
  checkColumnHasKey,
};
