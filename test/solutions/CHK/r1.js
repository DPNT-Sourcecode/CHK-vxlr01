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
  it('calc all correctly', function() {
    const result = chk('AAAABBBCCDD')
    assert.equal(result, 340)
  })
  it('bad input', function() {
    const result = chk('a')
    assert.equal(result, -1)
  })
  it('bad input', function() {
    const result = chk('ABCD')
    assert.equal(result, 115)
  })
})


