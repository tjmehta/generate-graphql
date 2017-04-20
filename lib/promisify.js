module.exports = promisify

function promisify (method, ctx) {
  return function (/* ...args */) {
    var args = Array.prototype.slice.call(arguments)
    return new Promise(function (resolve, reject) {
      var ret = method.apply(ctx, args.concat(callback))
      function callback (err, data) {
        if (err) return reject(err)
        resolve(data)
      }
    })
  }
}
