var express = require('express');
var router = express.Router();

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
  var id = Number(req.params.id)
  var data = accountsData(id)
  res.json(data)
})

router.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)
  var data = accountsData(id)
  res.json(data)
})

module.exports = router;
