var config      = require('./knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);

function getTransactions(id){
  return knex.select('*').from('transactions')
}

module.exports = {getTransactions}
