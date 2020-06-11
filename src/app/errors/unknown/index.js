const { errors } = require('../../constants')

class UnknownError extends Error {
  constructor(message = errors.defaultMessage) {
    super(message)
    this.name = 'UnknownError'
    this.message = message
    this.stack = new Error().stack
    this.status = 500
  }
}

module.exports = UnknownError
