
exports.up = function(knex, Promise) {
  return knex.schema.table('accounts', (table) => {
    table.string('account_email');
    table.string('account_password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('accounts', (table) => {
    table.dropColumn('account_email');
    table.dropColumn('account_password');
  })
};
