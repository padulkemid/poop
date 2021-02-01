const db = require('~db');
const col = require('~utils/check_column');
const ErrorWithCode = require('~utils/error_with_code');
const { tableNames } = require('~utils/table_utils');

const checkProductColumn = (column) => {
  const columns = ['name', 'quantity', 'manufacturer'];
  col.checkColumnHasKey(columns, column);
};

const checkColumnValue = (value) => {
  if (!value) throw new ErrorWithCode('400', 'Undefined value!');
  col.checkColumnHasLength(value);
};

const updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { column, value } = req.body;

    checkProductColumn(column);
    checkColumnValue(value);

    const [unpatched] = await db(tableNames.products).where('id', id);

    if (!unpatched) throw new ErrorWithCode('404', 'No product was found!');

    const [patched] = await db(tableNames.products)
      .where('id', id)
      .update(column, value, '*');

    res.status(201).json({
      status: 201,
      message: 'Product edited!',
      editedProduct: patched,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = updateProductById;
