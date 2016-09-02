const express = require('express');
const router = express.Router();
const { getTransactions, getAccount, findUserByAccountName }  = require('../config/database/db');
const { hashPass, compareHash } = require('../bcrypt_test.js')

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})
router.get('/', (req, res) => {
  res.redirect('/users/sign-in')
})

router.post('/sign-in', (req, res) => {
  let {account_name, account_password} = req.body
  findUserByAccountName(account_name)
    .then((logInData) => {
      const hash = logInData[0].account_password
      const myPassword = req.body.password

      if (compareHash(myPassword, hash)) {
        req.session.accountData = { id: logInData[0].id, userName: logInData[0].account_name }
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
