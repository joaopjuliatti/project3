const jwt = require('jsonwebtoken');
const { errorConstants } = require('../../constants')
const { NotAuthorizedError } = require('../../errors')
const keys = require('../../../config/keys')

/**
 * Decrypt JWT tokens
 * @function
 * @name decrypt
 * @param {object} data Data object
 * @param {string} data.token Token string
 * @returns {*} Decrypted payload
 */
function decrypt({ token }) {
  try {
    const decoded = jwt.verify(token, keys.auth.appSecret)

    return decoded
  } catch (error) {
    console.log(error)
    throw new NotAuthorizedError(errorConstants.auth.invalidToken)
  }
}

module.exports = decrypt
