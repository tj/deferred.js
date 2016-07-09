
module.exports = function Deferred() {
  this.p = new Promise((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
  })

  this.then = this.p.then.bind(this.p)
  this.catch = this.p.catch.bind(this.p)
}
