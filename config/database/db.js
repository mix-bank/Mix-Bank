let config      = require('../../knexfile').development;
let knex        = require('knex')(config);

const getTransactions = (id) => {
  return knex('transactions')
    .where('from_account_id', id)
    .orWhere('to_account_id', id)
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

let signIn = (account_name, account_email, account_password) => {
  return knex('accounts')
    .where('account_name', account_name)
    .then( logInData => {
      console.log("here is the sign in info: ", ...logInData)
      return logInData
    })
}

module.exports = {
  getTransactions,
  getAccount,
  signIn
}
