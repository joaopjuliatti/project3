const local = require('./local')
const development = require('./development')
const production = require('./production')

switch (process.env.NODE_ENV) {
  case 'local':
    module.exports = local
    break
  case 'development':
    module.exports = development
    break
  case 'production':
    module.exports = production
    break
}
