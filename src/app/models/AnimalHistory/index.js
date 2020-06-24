'use strict'

const getProperties = require('./getProperties')

/**
 * @typedef {Object} AnimalHistory
 * @property {number=} id
 * @property {string} status
 * @property {number=} weight
 * @property {number=} pasture
 * @property {date} weightedAt
 *
 */
module.exports = (sequelize, DataTypes) => {
  const AnimalHistory = sequelize.define('AnimalHistory', getProperties(DataTypes))

  AnimalHistory.associate = models => {
    AnimalHistory.belongsTo(models.Animal)
}

//   require('./staticFunctions')(sequelize, IncomeDeclaration)
//   require('./instanceFunctions')(sequelize, IncomeDeclaration)

  return AnimalHistory
}
