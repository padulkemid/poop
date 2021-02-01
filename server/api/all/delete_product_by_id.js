const db = require('~db');
const ErrorWithCode = require('~utils/error_with_code');
const { tableNames } = require('~utils/table_utils');

const deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [product] = await db(tableNames.products).where('id', id);

    if (!product) throw new ErrorWithCode('404', 'No product was found!');

    await db(tableNames.products).where('id', id).del();

    res.status(200).json({
      success: 200,
      message: 'Product is deleted!',
    });
  } catch (e) {
    next(e);
  }
};

module.exports = deleteProductById;
