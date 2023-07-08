const convertToCelsius = function(x_f) {
  x_c = (x_f - 32) * 5/9;
  return Math.round(x_c*10) / 10;
};

const convertToFahrenheit = function(x_c) {
  x_f = x_c * 9/5 + 32;
  return Math.round(x_f*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
