var express = require('express');
var router = express.Router();

router.get('/sign-in', (req, res) => {
  // console.log(res.session);
  res.render('sign-in')
})

router.post('/sign-in', (req, res) => {
  console.log("hello world");
  console.log(req.body)
})

/* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

module.exports = router;
