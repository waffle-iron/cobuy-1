const { keys } = Object
const assign = require('object-assign')
const { pull } = require('catstack')


const data = {
  1: {
    name: 'avocado'
  },
  2: {
    name: 'apple'
  },
  3: {
    name: 'plum'
  }
}

module.exports = {
  manifest: {
    all: 'source',
    get: 'async'
  },
  create: (api) => ({
    methods: {
      all: function () {
        const orders = keys(data)
          .map(id => assign({ id }, data[id]))
        return pull.values(orders)
      },
      get: function ({ id }, cb) {
        cb(null, assign({ id }, data[id]))
      }
    }
  })
}
