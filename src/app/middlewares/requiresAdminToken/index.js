const { errors } = require('../../constants')
const { auth } = require('../../../config/keys')
const { responseErrorHandler } = require('../../../helpers')
const { NotAuthorizedError } = require('../../errors')

/**
 * Requires admin token middleware
 * @async
 * @function
 * @name requiresAdminToken
 * @param {*} req Request instance
 * @param {*} res Response instance
 * @param {function} next Next callback
 * @returns {Promise<void>}
 */
async function requiresAdminToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization
    if (authHeader !== auth.adminToken) throw new NotAuthorizedError(errors.auth.invalidToken)

    return next()
  } catch (error) {
    responseErrorHandler(error, res, req)
  }
}

module.exports = requiresAdminToken
