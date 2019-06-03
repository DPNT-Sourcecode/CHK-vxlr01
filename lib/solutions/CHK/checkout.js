'use strict'

const prices = {
  A: {
    price: 50,
    offers: [
      { type: 'group', count: 5, price: 200 },
      { type: 'group', count: 3, price: 130 }
    ]
  },
  B: {
    price: 30,
    offers: [{ type: 'group', count: 2, price: 45 }]
  },
  C: {
    price: 20,
    offers: []
  },
  D: {
    price: 15,
    offers: []
  },
  E: {
    price: 40,
    offers: [{ type: 'freeItem', count: 2, item: 'B' }]
  },
  F: {
    price: 10,
    offers: [{ type: 'group', count: 3, price: 20 }]
  },
  G: {
    price: 20,
    offers: []
  },
  H: {
    price: 10,
    offers: [
      { type: 'group', count: 10, price: 80 },
      { type: 'group', count: 5, price: 45 }
    ]
  },
  I: {
    price: 35,
    offers: []
  },
  J: {
    price: 60,
    offers: []
  },
  K: {
    price: 80,
    offers: [{ type: 'group', count: 2, price: 150 }]
  },
  L: {
    price: 90,
    offers: []
  },
  M: {
    price: 15,
    offers: []
  },
  N: {
    price: 40,
    offers: [{ type: 'freeItem', count: 3, item: 'M' }]
  },
  O: {
    price: 10,
    offers: []
  },
  P: {
    price: 50,
    offers: [{ type: 'group', count: 5, price: 200 }]
  },
  Q: {
    price: 30,
    offers: [{ type: 'group', count: 3, price: 80 }]
  },
  R: {
    price: 50,
    offers: [{ type: 'freeItem', count: 3, item: 'Q' }]
  },
  S: {
    price: 30,
    offers: []
  },
  T: {
    price: 20,
    offers: []
  },
  U: {
    price: 40,
    offers: [{ type: 'group', count: 4, price: 120 }]
  },
  V: {
    price: 50,
    offers: [
      { type: 'group', count: 3, price: 130 },
      { type: 'group', count: 2, price: 90 }
    ]
  },
  W: {
    price: 20,
    offers: []
  },
  X: {
    price: 90,
    offers: []
  },
  Y: {
    price: 10,
    offers: []
  },
  Z: {
    price: 50,
    offers: []
  }
}

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

