const db = require('~db');
const { tableNames } = require('~utils/table_utils');

const getAllOrders = async (_, res) => {
  const orders = await db(tableNames.orders);
  res.json({
    status: 201,
    message: '💩 Poop is scominsg soon! stay tune!',
    orders,
  });
};

module.exports = getAllOrders;
