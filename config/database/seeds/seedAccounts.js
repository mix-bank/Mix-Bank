
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function (){
      return Promise.all([
        // Inserts seed entries
        knex('accounts').insert({id: 1, account_name: 'Ahmed'}),
        knex('accounts').insert({id: 2, account_name: 'James'}),
        knex('accounts').insert({id: 3, account_name: 'Dylan'})
      ]);
    });
};
