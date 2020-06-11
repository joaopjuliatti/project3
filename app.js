  
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { logger } = require('./src/helpers')
 
const app = express()

require('./src/app/models')
// require('./src/app/schemas')
require('./src/app/middlewares/requestLogger')(app)
// require('./src/routes')(app)

app.use(cors('*'))
app.use(express.json({}))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  logger.info(`[server] we are live on ${PORT}`)
  logger.info(`[server] environment: ${process.env.NODE_ENV}`)
})
