const db = require('~db');
const column = require('~utils/check_column');
const { tableNames } = require('~utils/table_utils');

const checkProductColumns = (body) => {
  const keys = ['name', 'quantity', 'manufacturer'];
  column.checkColumnAvailability(keys, body);
};

const createProduct = async (req, res, next) => {
  try {
    checkProductColumns(req.body);

    const { name, manufacturer } = req.body;

    column.checkColumnHasLength(name);
    column.checkColumnHasLength(manufacturer);

    const [createdProduct] = await db(tableNames.products).insert(
      req.body,
      '*'
    );

    res.status(201).json({
      status: 201,
      message: 'Product created!',
      createdProduct,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = createProduct;
