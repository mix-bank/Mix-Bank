var express = require('express');
var session = require('express-session')
var router = express.Router();


router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  // db: knex
}))

router.get('/sign-in', (req, res) => {
  res.send('sign-in')
})

// router.post('/')

/* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

module.exports = router;
