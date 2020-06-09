const chalk = require('chalk')
const { green, yellow, red } = chalk

/**
 * Prints a colored text in the console .Used to improve dev experience and debugging time.
 * @function
 * @name consoleLogger
 * @param {chalk.Chalk} color
 * @param {any} arg
 * @returns {void}
 */
function consoleLogger(color, arg) {
    console.debug(typeof arg === 'string' ? color(arg) : arg)
}

const loggers = {
  /**
   * Warning log.
   * @param {any} arg
   * @returns {void}
   */
  warn: arg => consoleLogger(yellow, arg),
  /**
   * Error log.
   * @param {any} arg
   * @returns {void}
   */
  error: arg => consoleLogger(red, arg),
  /**
   * Info log.
   * @param {any} arg
   * @returns {void}
   */
  info: arg => consoleLogger(green, arg),
  /**
   * Beaufity log
   * @param {any}
   * @returns {string}
   */
  beaufity: arg => JSON.stringify(arg, undefined, 2)
}

module.exports = loggers
