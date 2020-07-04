/**
 * Returns the object properties
 * @function
 * @async
 * @param {any} DataTypes
 * @return {Object}
 */
const getProperties = DataTypes => {
    return {
      status: {
        allowNull: false,
        type: DataTypes.STRING(32),
        defaultValue: 'fattening'
      },
      FarmId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      RealId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true
      },
      initialAge: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      boughtAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    }
  }
  
  module.exports = getProperties
  