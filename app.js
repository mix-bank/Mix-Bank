var express = require('express');
var app = express();

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var data = {
    account: {
      id: Number(req.params.id),
      transactions: []
    }
  }
  res.send(data)
})

app.listen(3000);
