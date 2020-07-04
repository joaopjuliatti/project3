/**
 * Returns the object properties
 * @function
 * @async
 * @param {any} DataTypes
 * @return {Object}
 */
const getProperties = DataTypes => {
    return {
      email: {
        type: DataTypes.STRING(64),
        allowNull: false
      },
      encryptedPassword: {
        type: DataTypes.STRING(1024),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      accessLevel: {
        type: DataTypes.ENUM('admin', 'manager', 'guest'),
        allowNull: false,
        defaultValue: 'admin'
      },
    }
  }
  
  module.exports = getProperties
  