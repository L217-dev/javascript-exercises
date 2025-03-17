const convertToCelsius = function(fahTempeture) {
  return Number(((fahTempeture-32)*5/9).toFixed(1))


};

const convertToFahrenheit = function(celsiusTempeture) {
  return Number(((celsiusTempeture*9/5) + 32).toFixed(1))
};
 convertToCelsius(32)
 convertToFahrenheit(0)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
