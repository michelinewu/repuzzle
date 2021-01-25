const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  origPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  resalePrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: '/images/default-product.png',
    validate: {
      notEmpty: true
    }
  },
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 5
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Product
