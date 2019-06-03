var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert')
const chk = require('../../../lib/solutions/CHK/checkout')

describe('CHK', function() {
  it('calc specials correctly', function() {
    const result = chk('AAAA')
    assert.equal(result, 180)
  })
  it('calc multiple specials correctly', function() {
    const result = chk('AAAABBB')
    assert.equal(result, 270)
  })
})

