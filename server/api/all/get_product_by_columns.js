const db = require('~db');
const column = require('~utils/check_column');
const { tableNames } = require('~utils/table_utils');

const getProductByColumns = async (req, res, next) => {
  try {
    const { by, value } = req.query;

    column.checkColumnHasLength(by);
    column.checkColumnHasLength(value);

    const rawQuery = `LOWER(${by}) LIKE '%${value}%'`;
    const products = await db(tableNames.products).where(db.raw(rawQuery));

    res.status(200).json({
      status: 200,
      products,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getProductByColumns;
