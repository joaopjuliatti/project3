/**
 * Returns the object properties
 * @function
 * @async
 * @param {any} DataTypes
 * @return {Object}
 */
const getProperties = DataTypes => {
    return {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      zipcode: {
        allowNull: false,
        type: DataTypes.STRING(8)
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING(128)
      },
      number: {
        allowNull: true,
        type: DataTypes.STRING(32)
      },
      complement: {
        allowNull: true,
        type: DataTypes.STRING(128)
      },
      district: {
        allowNull: false,
        type: DataTypes.STRING(64)
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING(128)
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(2)
      }
    }
  }
  
  module.exports = getProperties
  