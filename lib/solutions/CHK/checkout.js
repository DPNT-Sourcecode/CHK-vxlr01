'use strict'

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  try {
    const count = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0
    }

    skus.split('').forEach(sku => {
      if (count[sku] !== undefined) {
        count[sku] = count[sku] + 1
      } else {
        throw new Error('bad input')
      }
    })

    let total = 0

    if (count.E >= 2) {
      const bsToRemove = Math.floor(count.E / 2)
      if (bsToRemove > count.B) {
        count.B = 0
      } else {
        count.B -= bsToRemove
      }
    }

    const offersRemainerA5 = count.A % 5
    total += ((count.A - offersRemainerA5) / 5) * 200
    const offersRemainerA3 = offersRemainerA5 % 3
    total += offersRemainerA3 * 50
    total += ((offersRemainerA5 - offersRemainerA3) / 3) * 130

    const offersRemainerB = count.B % 2
    total += offersRemainerB * 30
    total += ((count.B - offersRemainerB) / 2) * 45

    const offersRemainerF = count.F % 3
    total += offersRemainerF * 10
    total += ((count.F - offersRemainerF) / 3) * 20

    total += count.C * 20
    total += count.D * 15
    total += count.E * 40

    return total
  } catch (e) {
    return -1
  }
}
