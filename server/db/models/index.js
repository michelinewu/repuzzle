const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const CartItem = require('./cartItem')
const db = require('../db')

User.hasMany(Order)
Order.belongsTo(User)

Product.belongsToMany(Order, {through: CartItem})
Order.belongsToMany(Product, {through: CartItem})

module.exports = {
  db,
  User,
  Product,
  Order,
  CartItem
}
