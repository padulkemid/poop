const { tableNames } = require('~utils/table_utils');

const tableReferences = (table, columnName, tableName) => {
  return table
    .integer(columnName)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade')
    .notNullable();
};

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.customers, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('password', 127).notNullable();
    table.string('phone', 50).notNullable();
    table.string('address').notNullable();
    table.timestamps(false, true);
  });

  await knex.schema.createTable(tableNames.products, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.integer('quantity').notNullable();
    table.string('manufacturer').notNullable();
    table.timestamps(false, true);
  });

  await knex.schema.createTable(tableNames.orders, (table) => {
    table.increments().notNullable();
    tableReferences(table, 'customer_id', tableNames.customers);
    tableReferences(table, 'product_id', tableNames.products);
    table.string('receiver_name').notNullable();
    table.string('receiver_address').notNullable();
    table.string('bank_name').notNullable();
    table.string('payment_proof').notNullable();
    table.boolean('order_approved').notNullable().defaultTo(false);
    table.timestamps(false, true);
  });

  await knex.schema.createTable(tableNames.shipments, (table) => {
    table.increments().notNullable();
    tableReferences(table, 'order_id', tableNames.orders);
    table.boolean('shipment_approved').notNullable().defaultTo(false);
    table.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await Promise.all(
    Object.values(tableNames).map((tableName) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
};
