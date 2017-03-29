
module.exports = function Deferred() {
  const p = new Promise((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
  })

  this.then = p.then.bind(p)
  this.catch = p.catch.bind(p)
  this.cb = (err, val) => {
    if (err) this.catch(err)
    else this.then(val)
  }
}
