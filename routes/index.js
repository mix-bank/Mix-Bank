var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('index.html');
});

const accountsData = (id) => {
  return {
    account: {
      id: id,
      transactions: [ { yes: "no?"}]
    }
  }
}


router.get('/api/v1/accounts/:id', (req, res) => {
  var id = Number(req.params.id)
  var data = accountsData(id).account
  console.log("winning!");
  res.json(data)
})

router.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)
  var data = accountsData(id).account.transactions
  res.json(data)
})

module.exports = router;
