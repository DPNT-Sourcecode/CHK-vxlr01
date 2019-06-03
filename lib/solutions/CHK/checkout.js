'use strict'

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  const count = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  }

  skus.split('').forEach(sku => {
    const existing = count[sku.toUpperCase()]
    if (existing) {
      count[sku.toUpperCase()] = existing + 1
    }
  })

  let total = 0

  const aOffersRemainder = 3 % count.A

  if (aOffersRemainder !== count.A) {
    total += ((count.A - aOffersRemainder) / 3) * 130
  }

  throw new Error('method not implemented')
}
