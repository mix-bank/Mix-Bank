var express = require('express');
var app = express();

const accountsData = (id) => {
    account: {
      id: id,
      transactions: []
    }
}


app.get('/api/v1/accounts/:id', (req, res) => {
  var id = Number(req.params.id)
  var data = accountsData(id)
  console.log(data);
  res.json(data)
})

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)
  var data = accountsData(id)
  res.json(data)
})

module.exports = app
