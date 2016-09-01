let express = require('express');
let router = express.Router();
let {getTransactions, getAccount, findUserByAccountName}  = require('../config/database/db');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/users/sign-in');
});

router.get('/api/v1/*', (req, res, next) => {

  if (req.session.accountData) {
    next()
  } else {
    res.redirect('/users/sign-in')
  }
})

router.get('/api/v1/accounts/:id', (req, res) => {
  let id = req.params.id
  getAccount(id)
    .then( data => {
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})
router.get('/api/v1/accounts/:id/transactions', (req, res) => {
  let id = req.params.id
  getTransactions(id)
    .then( data => {
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})

// router.get('/home/account/:id', (req, res) => {
//   res.render('home.html')
// })




module.exports = router;
