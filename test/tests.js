var request = require ('supertest')
var test = require ('tape')
var server = require('../server.js')

  request(server)
    .get('/api/v1/accounts/1/transactions')
    .expect(200)
    .end(function(err, res) {

      test('api conection', (t) => {
        t.error(err, "cannot connect to the API")
        t.true(200)
        t.end()
    })
})

  var expected = {
    account:
      {
        id: 1,
        transactions:[
          {
            id:503,
            amount: 456,
            description: 'purchase bk',
            from_account_id: 1,
            to_account_id: 2
          },
          {
            id:504,
            amount: 56700,
            description: 'weekly pay from bk',
            from_account_id: 2,
            to_account_id: 1
          }
        ]
      }

  }

  request(server)
    .get('/api/v1/accounts/1/transactions')
    .expect(200)
    .end(function(err, res) {
      test('typeof id', (t) => {
        t.ifError(err, "this is an error")
        t.true(typeof (res.body.account.id), 'number', "data.account.id should be a number")
        t.end()
    })
})
