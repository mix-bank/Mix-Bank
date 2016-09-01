const config      = require('../../knexfile').development;
const knex        = require('knex')(config);

const getPasswordHash = (hash) => {
  return knex('accounts')
    .where('account_password', hash)
    .then (data => {
      return data
    })
}

const getTransactions = (id) => {
  return knex('transactions')
    .where('from_account_id', id)
    .orWhere('to_account_id', id)
    .then( data => {
      return data
    })
}

const getAccount = (id) => {
  return knex('accounts')
    .where('id', id)
    .then( data => {
      return data
    })
}

const findUserByAccountName = (account_name) => {
  return knex('accounts')
    .where('account_name', account_name)
    .then( logInData => {
      return logInData
    })
}

module.exports = {
  getTransactions,
  getAccount,
  findUserByAccountName
}
