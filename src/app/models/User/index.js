'use strict'

const getProperties = require('./getProperties')

/**
 * @typedef {Object} User
 * @property {number=} id
 * @property {string} email
 * @property {string} password
 * @property {string} name
 * @property {number} cpf
 * @property {boolean} active
 * @property {string} accessLevel
 *
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', getProperties(DataTypes))

  User.associate = models => {
    User.hasMany(models.Farm)
    User.hasMany(models.Animal)
}


  return User
}
