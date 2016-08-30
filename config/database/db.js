var config      = require('../../knexfile').development;
// var env         = 'development';
var knex        = require('knex')(config);



const getTransactions = (id) => {
  // NOTE THIS NEED TO CHANGE from 1 -> id

  return knex('transactions')
    // .where('id', 1)
    .then( data => {
      console.log('here is the data', data)
      return data
    })
  // return knex.select('*').table('transactions')
}

// const getAccounts = function (){
//   return knex.select('*').table('accounts')
// }
// getAccounts()
//   .then(function(data){
//     console.log(data);
//   })
//   .catch(function(err){
//     console.log(err);
//   })


module.exports = {getTransactions}
