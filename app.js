  
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { logger } = require('./src/helpers')
 
const app = express()

app.use(cors('*'))
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

require('./src/app/middlewares/errorHandler')(app)

require('./src/app/models')
require('./src/routes')(app)

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  logger.info(`[server] we are live on ${PORT}`)
  logger.info(`[server] environment: ${process.env.NODE_ENV}`)
})
