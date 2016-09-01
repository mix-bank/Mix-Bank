let express = require('express');
let router = express.Router();
let {getTransactions, getAccount, signIn}  = require('../config/database/db');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("hello, im here, getting the index")
  res.redirect('/users/sign-in');
});

router.get('/api/v1/accounts/:id', (req, res) => {
  let id = req.params.id
  getAccount(id)
    .then( data => {
      console.log(data);
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})
router.get('/api/v1/accounts/:id/transactions', (req, res) => {
  let id = req.params.id
  getTransactions(id)
    .then( data => {
      console.log(data);
      res.json(data)
    })
    .catch( err => res.status(500).send(err) )
})




module.exports = router;
