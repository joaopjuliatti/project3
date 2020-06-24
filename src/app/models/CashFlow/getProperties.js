/**
 * Returns the object properties
 * @function
 * @async
 * @param {any} DataTypes
 * @return {Object}
 */
const getProperties = DataTypes => {
    return {
      FlowTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      FarmId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      receiveOrPaidAts: {
        allowNull: false,
        type: DataTypes.DATE
      },
      value: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      }
    }
  }
  
  module.exports = getProperties
  