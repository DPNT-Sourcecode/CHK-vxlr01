'use strict'

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  try {
    const count = {
      A: 0,
      B: 0,
      C: 0,
      D: 0
    }

    skus.split('').forEach(sku => {
      console.log(sku)
      if (count[sku] !== undefined) {
        count[sku] = count[sku] + 1
      } else {
        throw new Error('bad input')
      }
    })

    let total = 0

    if (count.A > 3) {
      const aOffersRemainer = count.A % 3
      total += aOffersRemainer * 50
      total += ((count.A - aOffersRemainer) / 3) * 130
    }

    if (count.B > 2) {
      const offersRemainer = count.A % 2
      total += offersRemainer * 30
      total += ((count.A - offersRemainer) / 2) * 45
    }

    total += count.C * 20
    total += count.D * 15

    return total
  } catch (e) {
    return -1
  }
}


