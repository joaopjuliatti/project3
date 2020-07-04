/**
 * Returns the object properties
 * @function
 * @async
 * @param {any} DataTypes
 * @return {Object}
 */
const getProperties = DataTypes => {
    return {
      name: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    }
  }
  
  module.exports = getProperties
  