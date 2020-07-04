const jwt = require('jsonwebtoken');
const { errorConstants } = require('../../constants')
const keys = require('../../../config/keys')

/**
 * Encrypt the payload to a JWT tokens
 * @function
 * @name encrypt
 * @param {*} payload Payload to be encrypted
 * @returns {string} Encrypted payload
 */
function encrypt(payload) {
  try {
    const token = jwt.sign(
      { ...payload },
      keys.auth.appSecret,
      { expiresIn: keys.auth.appSecretExpiresIn }
    )

    return token
  } catch (error) {
    throw new Error(errorConstants.auth.couldNotEncrypt)
  }
}

module.exports = encrypt
