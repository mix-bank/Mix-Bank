
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('accounts').insert({id: 1, account_name: 'Ahmed', account_email: 'ahmed@test.com', account_password: '$2a$10$skjmwSzquAIqBJrRB/B/Gea369DGsK5B1kOzBU0xtJpQOErWUO3oK'}),
        knex('accounts').insert({id: 2, account_name: 'James', account_email: 'james@test.com', account_password: '$2a$10$2v9heMmv93ONRpguu.tsauvtKwalcMPZNFKFC6lUXds57rdpCfTN2'}),
        knex('accounts').insert({id: 3, account_name: 'Dylan', account_email: 'dylan@test.com', account_password: '$2a$10$euxXvghd.ESb8WSWmQYQPenJByRPGysgKPKVr1YsnO5PklroxvSCa'})
      ]);
    });
};
