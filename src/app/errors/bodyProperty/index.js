class BodyPropertyError extends Error {
  constructor(message) {
    super(message)
    this.name = 'BodyPropertyError'
    this.message = message
    this.stack = new Error().stack
    this.status = 400
  }
}

module.exports = BodyPropertyError
