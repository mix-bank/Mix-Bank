var express = require('express');
var router = express.Router();
var {getTransactions, getAccount, signIn}  = require('../config/database/db');
// var session = require('express-session');
//
//
// // express-sessions setup
// router.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
//   // db: knex
// }))

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("hey there");
  res.send('index.html');
});

router.get('/api/v1/accounts/:id', (req, res) => {
  var id = req.params.id
  getAccount(id)
    .then( data => {
      console.log(data);
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})
router.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = req.params.id
  getTransactions(id)
    .then( data => {
      console.log(data);
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

module.exports = router;
