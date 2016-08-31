let express = require('express');
let router = express.Router();
let {getTransactions, getAccount, signIn}  = require('../config/database/db');

router.get('/sign-in', (req, res) => {
  // console.log(res.session);
  res.render('sign-in')
})

router.post('/sign-in', (req, res) => {
  console.log("hello world");
  console.log(req.body)
  let {account_name, email, password} = req.body
  signIn(account_name, email, password)
    // .then(
    //   if (password===)
    // )
})

/* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

module.exports = router;
