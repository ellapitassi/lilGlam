const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Product