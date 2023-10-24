function repeatString (str, count) {
  if (count < 0) {
    return 'ERROR'
  }
  return Array(count).fill(str).join('')
}

module.exports = repeatString
