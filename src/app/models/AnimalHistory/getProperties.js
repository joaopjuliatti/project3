/**
 * Returns the object properties
 * @function
 * @async
 * @param {any} DataTypes
 * @return {Object}
 */
const getProperties = DataTypes => {
    return {
      AnimalId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      weightedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      weight: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      pasture: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    }
  }
  
  module.exports = getProperties
  