var express = require('express');
var router = express.Router();
var {getTransactions}  = require('../config/database/db');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("hey there");
  res.send('index.html');
});

const accountsData = (id) => {
  return {
    account: {
      id: id,
      transactions: []
    }
  }
}


router.get('/api/v1/accounts/:id', (req, res) => {
  getTransactions()
    .then(function(data){
      console.log(data);
    })
    .catch(logError)
})

router.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)
  var data = accountsData(id)
  res.json(data)
})

function logError (err) {
  res.status(500).send('cant display data')
}
module.exports = router;
