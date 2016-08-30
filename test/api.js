var request = require ('supertest')
var test = require ('tape')
var server = require('../server.js')


request(server)
  .get('/api/v1/accounts/1/transactions')
  .expect(200)
  .end(function(err, res) {
    test('typeof id', (t) => {
      t.ifError(err, "this is an error")
      t.equal(typeof (res.body.account.id), 'number', "data.account.id should be a number")
      t.true(Array.isArray(res.body.account.transactions), "data.account.id should be a number")
      t.end()
    })
  })
