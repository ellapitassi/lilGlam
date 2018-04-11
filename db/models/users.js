const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        //allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true
    }
  })

  module.exports = User