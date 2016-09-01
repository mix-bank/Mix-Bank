let express = require('express');
let router = express.Router();
let {getTransactions, getAccount, findUserByAccountName}  = require('../config/database/db');

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})
router.get('/', (req, res) => {
  res.redirect('/users/sign-in')
})

router.post('/sign-in', (req, res) => {
  let {account_name, account_email, account_password} = req.body
  findUserByAccountName(account_name)
    .then((logInData) => {
      // console.log("this is also log in data: ", logInData)
      // console.log("this is the log in password: ", req.body.password)
      if (logInData[0].account_password === req.body.password) {
        // console.log("this is the session cookie: ", req.session)
        req.session.accountData = { id: logInData[0].id, userName: logInData[0].account_name, email: logInData[0].account_email }
        // console.log(req.session.accountData)
        let id = req.session.accountData.id
        res.redirect(`/users/${id}`)
        // res.redirect('/api/v1/accounts/' + id)
      } else {
        res.send('You are a terrible hacker')
      }
    })
})


router.get('/sign-out', (req, res) => {
  console.log("I'm here");
  req.session.destroy()
  res.redirect('/users/sign-in')
})

router.get('/:id', (req, res) => res.render('app'))

module.exports = router;
