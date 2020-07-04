require('dotenv').config()

const repl = require('repl')

async function start() {

  const replServer = repl.start({
    prompt: 'Server Console > '
  })

  const db = require('./src/app/models')

  replServer.context.db = db
}

start()
