const { tableNames } = require('../../../utils/table_utils');

exports.seed = async (knex) => {
  await Promise.all(
    Object.values(tableNames).map((tableName) => knex(tableName).del())
  );

  const customer = {
    name: 'Abdul Johnson',
    email: 'abdul@johnson.co',
    password: 'abdulqadir',
    phone: '085123458172',
    address: 'Jl. Panglima Polim, No. 1, 51340',
  };

  const product = {
    name: 'Shampoo Metal',
    quantity: 10,
    manufacturer: 'Metal Fortis',
  };

  const order = {
    customer_id: 1,
    product_id: 1,
    receiver_name: 'Abdul Johnson',
    receiver_address: 'Jl. Panglima Polim, No.1, 51340',
    bank_name: 'Mandiri',
    payment_proof:
      'https://4.bp.blogspot.com/-wAeplClknMM/UuzceIIb_yI/AAAAAAAAAsU/DzxqE78D--k/s1600/Fake-Paypal-Payment-Proof.PNG',
  };

  const shipment = {
    order_id: 1,
  };

  const [createdCustomer] = await knex(tableNames.customers).insert(
    customer,
    '*'
  );
  const [createdProduct] = await knex(tableNames.products).insert(product, '*');
  const [createdOrder] = await knex(tableNames.orders).insert(order, '*');
  const [createdShipment] = await knex(tableNames.shipments).insert(
    shipment,
    '*'
  );
};
