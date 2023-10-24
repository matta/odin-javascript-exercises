const convertToCelsius = function (degrees) {
  return round((degrees - 32) * 5 / 9)
}

const convertToFahrenheit = function (degrees) {
  return round((degrees * 9.0 / 5.0) + 32)
}

const round = function (num) {
  return Math.round(num * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}
