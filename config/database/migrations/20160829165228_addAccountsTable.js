
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('accounts', (table) => {
    table.increments('id').primary();
    table.string('account_name');
  })

};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('accounts');
};
