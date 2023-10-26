const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (a) => a.reduce(add, 0);

const multiply = (a) => a.reduce((a, b) => a * b, 1);

const power = (a, b) => a ** b;

const factorial = function (n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
