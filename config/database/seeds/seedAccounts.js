
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('accounts').insert({id: 1, account_name: 'Ahmed', account_email: 'ahmed@test.com', account_password: 'test1'}),
        knex('accounts').insert({id: 2, account_name: 'James', account_email: 'james@test.com', account_password: 'test2'}),
        knex('accounts').insert({id: 3, account_name: 'Dylan', account_email: 'dylan@test.com', account_password: 'test3'})
      ]);
    });
};
