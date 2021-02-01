const db = require('~db');
const { tableNames } = require('~utils/table_utils');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await db(tableNames.products);
    res.status(200).json({
      status: 200,
      products,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getAllProducts;
