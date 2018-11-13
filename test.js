'use strict'

var test = require('tape')
var yahoo = require('./')

test(function (t) {
  t.equal(yahoo({ to: 'bvdrucker@gmail.com' }), 'http://compose.mail.yahoo.com/?to=bvdrucker%40gmail.com')
  t.equal(yahoo({ to: ['bvdrucker@gmail.com', 'bdrucker@eazeup.com'] }), 'http://compose.mail.yahoo.com/?to=bvdrucker%40gmail.com%2Cbdrucker%40eazeup.com')
  t.equal(yahoo({ to: 'bvdrucker@gmail.com', subject: 'Hello world' }), 'http://compose.mail.yahoo.com/?subject=Hello%20world&to=bvdrucker%40gmail.com')
  t.end()
})
