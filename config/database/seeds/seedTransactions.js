
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('transactions').insert({id: 1, amount: 30450, description: 'a pot plant', from_account_id: 1, to_account_id: 2}),
        knex('transactions').insert({id: 2, amount: 20220, description: 'not so hardcore gaming rig', from_account_id: 2, to_account_id: 3}),
        knex('transactions').insert({id: 3, amount: 100000, description: 'hardcore gaming rig', from_account_id: 3, to_account_id: 2})
      ]);
    });
};
