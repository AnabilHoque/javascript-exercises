const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
	return array.reduce((accumulator, element) => {
    return accumulator+element;
  }, 0);
};

const multiply = function(...args) {
  return [...args].reduce((accumulator, element) => {
    return accumulator*element;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  return num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
