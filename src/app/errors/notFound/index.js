class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotFoundError'
    this.message = message
    this.stack = new Error().stack
    this.status = 404
  }
}

module.exports = NotFoundError
