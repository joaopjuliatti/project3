'use strict'

const getProperties = require('./getProperties')

/**
 * @typedef {Object} Animal
 * @property {number=} id
 * @property {string} status
 * @property {number=} UserId
 * @property {number=} FarmId
 * @property {number=} RealId
 * @property {number} initialAge
 * @property {date} boughtAt
 *
 */
module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', getProperties(DataTypes))

  Animal.associate = models => {
    Animal.belongsTo(models.User)
    Animal.belongsTo(models.Farm)
    Animal.hasMany(models.AnimalHistory)
}

//   require('./staticFunctions')(sequelize, IncomeDeclaration)
//   require('./instanceFunctions')(sequelize, IncomeDeclaration)

  return Animal
}
