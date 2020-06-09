const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(__filename)
const postgresConfig = require('../../config/postgres')
const { logger } = require('../../helpers')
const db = {}

const sequelize = new Sequelize({
  host: postgresConfig.host,
  database: postgresConfig.database,
  username: postgresConfig.username,
  password: postgresConfig.password,
  ...postgresConfig.options
})

fs.readdirSync(__dirname)
  .filter(file => {
    // this is not a folder, must return to avoid crash
    if (file.indexOf('.') > 0) return null

    // search in all folders, looking for index.js files to attatch to the db object
    return fs.readdirSync(path.join(__dirname, file)).filter(file => {
      return file.indexOf('.') !== 0 && file === basename && file.slice(-3) === '.js'
    })
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db)
})

sequelize
  .authenticate()
  .then(() => process.env.NODE_ENV !== 'local' && logger.info('[postgresql] connection established successfully'))
  .catch(error => process.env.NODE_ENV !== 'local' && logger.error(`[postgresql] Unable to connect to the database: ${error}`))

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
