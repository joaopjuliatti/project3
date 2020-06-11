const logger = require('../logger')
const { UnknownError } = require('../../app/errors')

/**
 * @description Handle controllers' errors and treat them
 * @function
 * @name responseErrorHandler
 * @param {Error} error Error instance
 * @param {Object} res Response instance
 * @param {Object} req Request instance
 * @returns {Object} Treated error
 */

function responseErrorHandler(error, res, req) {
  logger.error(error)
  let newError = error

  if (!newError.status) {
    newError = new UnknownError()
  }

  const errorBody = {
    name: newError.name,
    message: newError.message
  }

  if (process.env.NODE_ENV !== 'production') errorBody.stack = newError.stack

  return res.status(newError.status).json({ error: errorBody })
}

module.exports = responseErrorHandler
