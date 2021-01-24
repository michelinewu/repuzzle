const Sequelize = require('sequelize')
const db = require('../db')

const CartItem = db.define('cartItem', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
      notEmpty: true
    }
  },
  historicalPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = CartItem
