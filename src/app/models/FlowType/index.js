'use strict'

const getProperties = require('./getProperties')

/**
 * @typedef {Object} FlowType
 * @property {number=} id
 * @property {string} name
 * @property {boolean} active
 *
 */
module.exports = (sequelize, DataTypes) => {
  const FlowType = sequelize.define('FlowType', getProperties(DataTypes))

  FlowType.associate = models => {
    FlowType.belongsTo(models.CashFlow)
}

  return FlowType
}
