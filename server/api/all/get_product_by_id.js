const db = require('~db');
const ErrorWithCode = require('~utils/error_with_code');
const { tableNames } = require('~utils/table_utils');

const getProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [product] = await db(tableNames.products).where('id', id);

    if (!product) throw new ErrorWithCode('404', 'No product was found!');

    res.status(200).json({
      status: 200,
      product,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getProductsById;
