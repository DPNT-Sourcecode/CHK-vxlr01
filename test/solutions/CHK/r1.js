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
    assert.equal(result, 130 + 50 + 45 + 30)
  })
  it('calc all correctly', function() {
    const result = chk('AAAABBBCCDD')
    assert.equal(result, 130 + 50 + 45 + 30 + 20 + 20 + 15 + 15)
  })
  it('bad input', function() {
    const result = chk('a')
    assert.equal(result, -1)
  })
  it('normal input', function() {
    const result = chk('ABCD')
    assert.equal(result, 115)
  })
  it('E offer', function() {
    const result = chk('ABCDEE')
    assert.equal(result, 115 + 40 + 40 - 30)
  })
  it('E offer', function() {
    const result = chk('BBEE')
    45 + 40 + 40 = 125
    30 + 30 + 40 + 40 - 30 = 110
    assert.equal(result, 110)
  })
})





