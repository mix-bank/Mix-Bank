var config      = require('../../knexfile').development;
var knex        = require('knex')(config);



const getTransactions = (id) => {
  return knex('transactions')
    .where('id', id)
    .then( data => {
      console.log('here is the data', data)
      return data
    })
}

const getAccount = (id) => {
  return knex('accounts')
    .where('id', id)
    .then( data => {
      console.log('here is the data', data)
      return data
    })
}

module.exports = {getTransactions, getAccount}
