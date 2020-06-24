'use strict'

const getProperties = require('./getProperties')

/**
 * @typedef {Object} AnimalHistory
 * @property {number=} id
 * @property {string} status
 * @property {number=} FlowTypeId
 * @property {number=} FarmId
 * @property {date} receiveOrPaidAts
 * @property {number=} value
 *
 */
module.exports = (sequelize, DataTypes) => {
  const CashFlow = sequelize.define('CashFlow', getProperties(DataTypes))

  CashFlow.associate = models => {
    CashFlow.belongsTo(models.Farm)
    CashFlow.hasMany(models.FlowType)
}


  return CashFlow
}
