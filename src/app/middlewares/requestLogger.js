const { logger } = require('../../helpers')

module.exports = app => {
  app.all('*', (req, res, next) => {
    logger.info(`[${req.method}] ${req.path}:`)
    logger.info(logger.beaufity(req.body))

    return next()
  })
}
