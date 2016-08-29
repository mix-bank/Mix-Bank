
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('transactions', (table) => {
    table.increments('id').primary();
    table.integer('amount');
    table.string('description');
    table.integer('from_account_id');
    table.integer('to_account_id');
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('transactions');
};
