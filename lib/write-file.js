var fs = require('fs')
var promisify = require('./promisify.js')

module.exports = promisify(fs.writeFile, fs)
