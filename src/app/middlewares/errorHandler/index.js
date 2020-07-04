
module.exports = app => {
  app.use(function(error, req, res, next) {
    console.error('[app use err] --> ', error)

    if (error && error.stack) {
      console.error(error.stack)
    } else {
      console.error(error)
    }

    return res.status(500).json({ error: true })
  })
}
