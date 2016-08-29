var express = require('express');
var app = express();

app.get('/api/v1/accounts/:id', (req, res) => {
  var data = {
    account: {
      id: Number(req.params.id)
    }
  }
  console.log(data.account);
  res.send(data.account)
})

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var data = {
    account: {
      id: Number(req.params.id),
      transactions: []
    }
  }
  console.log(data.account.transactions);
  res.send(data.account.transactions)
})

app.listen(3000);
