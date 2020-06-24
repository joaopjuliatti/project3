'use strict'

const getProperties = require('./getProperties')

/**
 * @typedef {Object} Farm
 * @property {number=} id
 * @property {number=} UserId
 * @property {string} name
 * @property {string} zipcode
 * @property {string} street
 * @property {number} number
 * @property {string} complement
 * @property {string} district
 * @property {string} city
 * @property {string} state
 *
 */
module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', getProperties(DataTypes))

  Farm.associate = models => {
    Farm.belongsTo(models.User)
}

//   require('./staticFunctions')(sequelize, IncomeDeclaration)
//   require('./instanceFunctions')(sequelize, IncomeDeclaration)

  return Farm
}
