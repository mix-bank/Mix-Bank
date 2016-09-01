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
  let {account_name, account_email, account_password} = req.body
  signIn(account_name, account_email, account_password)
    .then((logInData) => {
      console.log("this is also log in data: ", logInData)
      console.log("this is the log in password: ", account_password)
      if (logInData[0].account_password === req.body.password) {
        console.log("this is the session cookie: ", req.session)
        req.session.accountData = { id: logInData[0].id }
        console.log(req.session.accountData)
        //  = req.body.id
        // let req.params.id = req.session.cookie.id
        res.redirect('/index/api/v1/accounts/:id')
      } else {
        res.send('You are a terrible hacker')
      }
    })
})

module.exports = router;
