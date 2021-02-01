const db = require('../../db/connection');
const { tableNames } = require('../../utils/table_utils');

const getAllOrders = async (_, res) => {
  const orders = await db(tableNames.orders);
  res.json({
    status: 201,
    message: '💩 Poop is cominsg soon! stay tune!',
    orders,
  });
};

module.exports = getAllOrders;
