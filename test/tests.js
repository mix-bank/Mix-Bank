var request = require ('supertest')
var test = require ('tape')
var server = require('../server.js')

test('api conection', (t) => {
  request(server)
    .get('/api/v1/accounts/1/transactions')
    .expect('Content-Type', "/json/")
    .expect(200)
    .end(function(err, res) {
      t.error(err, "this is an error :(  :")
    })
})

test('typeof id', (t) => {
  request(server)
    .get('/api/v1/accounts/1/transactions')
    .expect('Content-Type', "/json/")
    .expect(200)
    .end(function(err, res) {
      t.error(err, "this is an error :(  :")
      t.equal(res.data.account, )
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
