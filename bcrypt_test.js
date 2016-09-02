const bcrypt = require('bcrypt')

const hashPass = (myPassword, saltRounds = 10) => bcrypt.hashSync(myPassword, saltRounds);
const compareHash = (myPassword, hash) => bcrypt.compareSync(myPassword, hash); // true

module.exports = { hashPass, compareHash };
