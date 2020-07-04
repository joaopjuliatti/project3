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
      receiveOrPaidAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      value: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING(1024)
      }
    }
  }
  
  module.exports = getProperties
  