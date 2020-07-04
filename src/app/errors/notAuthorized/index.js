class NotAuthorizedError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotAuthorizedError'
    this.message = message
    this.stack = new Error().stack
    this.status = 401
  }
}

module.exports = NotAuthorizedError
