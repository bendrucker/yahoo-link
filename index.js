'use strict'

var assert = require('assert-ok')
var array = require('cast-array')
var filter = require('object-filter')
var qs = require('query-string')

module.exports = function mailtoLink (options) {
  assert(options, 'options are required')

  var query = filter({
    to: addresses(options.to),
    cc: addresses(options.cc),
    bcc: addresses(options.bcc),
    subject: options.subject,
    body: options.body
  }, Boolean)

  return 'http://compose.mail.yahoo.com/?' + qs.stringify(query)
}

function addresses (email) {
  return email ? array(email).join(',') : undefined
}
