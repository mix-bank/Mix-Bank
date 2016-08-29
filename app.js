var app = require('express')

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var data = {
    account: {
      id: Number(req.params.id),
      transactions: []
    }
  }
  return(data)
}
)
