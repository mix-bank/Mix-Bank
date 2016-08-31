let express = require('express');
let router = express.Router();
let {getTransactions, getAccount, signIn}  = require('../config/database/db');

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})
router.get('/', (req, res) => {
  res.redirect('/users/sign-in')
})

router.post('/sign-in', (req, res) => {
  console.log("This is the req.body: ", req.body)
  var {account_name, email, password} = req.body
  signIn(account_name, email, password)
    .then((logInData) => {
      console.log("this is also log in data: ", ...logInData)
      console.log("this is the log in password: ", req.body.password)
      if (password === req.body.password) {
        res.redirect('/index/api/v1/accounts/2')
      } else {
        res.send('You are a terrible hacker >:(')
      }
    }
      // if (password===)
    )
})

/* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

module.exports = router;
