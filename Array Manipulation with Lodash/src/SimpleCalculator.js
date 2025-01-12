
const chai = require('chai');

const addNumbers = (a,b) => {
  if (typeof(a) == 'number' && typeof(b) == 'number') {
    return a + b;
  }
  return 'Invalid parameters';
}

const subNumbers = (a,b) => {
  if (typeof(a) == 'number' && typeof(b) == 'number') {
    return a - b;
  }
  return 'Invalid parameters';
}

const mulNumbers = (a,b) => {
  if (typeof(a) == 'number' && typeof(b) == 'number') {
    return a * b;
  }
  return 'Invalid parameters';
}

const divNumbers = (a,b) => {
  if (typeof(a) == 'number' && typeof(b) == 'number') {
    if (b == 0) {
      return 'Please provide valid numbers..!'
    }
    return a / b;
  }
  return 'Invalid parameters';
}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}