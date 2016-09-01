const express = require('express');
const router = express.Router();
const {getTransactions, getAccount, findUserByAccountName}  = require('../config/database/db');
const {comparePass} = require('../bcrypt_test.js')

console.log('inside users.js ', comparePass);

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
      if (logInData[0].account_password === req.body.password) {
        req.session.accountData = { id: logInData[0].id, userName: logInData[0].account_name, email: logInData[0].account_email }
        let id = req.session.accountData.id
        res.redirect(`/users/${id}`)
      } else {
        res.redirect('/users/sign-in')
      }
    })
})


router.get('/sign-out', (req, res) => {
  req.session.destroy()
  res.redirect('/users/sign-in')
})

router.get('/:id', (req, res) => res.render('app'))

module.exports = router;
