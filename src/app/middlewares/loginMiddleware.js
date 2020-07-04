const { errorConstants } = require('../constants')
const { tokenEncryptionService } = require('../services')
const db = require('../models')
const { responseErrorHandler } = require('../../helpers')
const { NotAuthorizedError } = require('../errors')

/**
 * Passwordless' authentication middleware
 * @async
 * @function
 * @name loginMiddleware
 * @param {*} req Request instance
 * @param {*} res Response instance
 * @param {*} next Next callback
 * @returns {Promise<void>}
 */
async function loginMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) throw new NotAuthorizedError(errorConstants.auth.tokenNotProvided)

    const decoded = tokenEncryptionService.decrypt({ token: authHeader })
    const user = await db.User.findByPk(decoded.userId)
    if (!user) throw new NotAuthorizedError(errorConstants.auth.invalidToken)

    req.user = decoded
    return next()
  } catch (error) {
    await responseErrorHandler(error, res, req)
  }
}

module.exports = loginMiddleware
