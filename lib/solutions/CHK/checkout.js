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
    if (existing !== undefined) {
      count[sku.toUpperCase()] = existing + 1
    }
  })

  let total = 0

  if (count.A > 3) {
    const aOffersRemainer = count.A % 3
    total += aOffersRemainer * 50
    total += ((count.A - aOffersRemainer) / 3) * 130
  }

  return total
}


