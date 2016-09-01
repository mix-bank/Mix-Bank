const bcrypt = require('bcrypt')

const saltRounds = 10;
const myPassword = 'Jim345346456#$%^#$%^';

let hash
let comparePass

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPassword, salt, function(err, hash) {

    // console.log('pass:', myPassword)
    // console.log('hash:', hash)
    // console.log('')
    hash = hash
    bcrypt.compare(myPassword, hash, function(err, res) {
      comparePass = res
      // console.log(res);
      // console.log('Hash inside compare', hash);
    });
  })
})

module.exports = { comparePass };
