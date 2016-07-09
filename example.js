
const Deferred = require('./')
const sleep = require('co-sleep')
const co = require('co')

const inflight = {}

co(function *(){
  inflight.foo = new Deferred
  console.log('working')
  yield sleep(1000)
  console.log('done working')
  inflight.foo.resolve({ some: { computed: 'value' } })
}).catch(console.error)

co(function *(){
  console.log('waiting')
  const res = yield inflight.foo
  console.log('done waiting, %j', res)
}).catch(console.error)

co(function *(){
  console.log('waiting')
  const res = yield inflight.foo
  console.log('done waiting, %j', res)
}).catch(console.error)
