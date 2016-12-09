/**
 * Parse a string to JSON
 * @param  {string} str String to parse
 * @return {Promise}     Promise which resolves with the parsed JSON
 */
exports.parse = function (str) {
  try {
    let json = (typeof str === 'string') ? JSON.parse(str) : null
    return json === null ? Promise.reject(new Error('input was not a string')) : Promise.resolve(json)
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * Stringify an object to JSON
 * @param  {object} obj Object to stringify
 * @return {Promise}     Promise which resolves with the stringified JSON
 */
exports.stringify = function (obj) {
  try {
    let str = (typeof obj === 'object') ? JSON.stringify(obj) : null
    return str === null ? Promise.reject(new Error('input was not an object')) : Promise.resolve(str)
  } catch (e) {
    return Promise.reject(e)
  }
}
