const computeCeil = (number) => {
  if (number <= 0) {
    throw new Error('ERROR::Number is less than or equal to zero..!');
  }
  return Math.ceil(number);
}
const computeFloor = (number) => {
  if (number <= 0) {
    throw new Error('ERROR::Number is less than or equal to zero..!');
  }
  return Math.floor(number);
}
const computeSquareRoot = (number) => {
  if (number <= 0) {
    throw new Error('ERROR::Number is less than or equal to zero..!');
  }
  return Math.sqrt(number);
}
const computePower = (number, powerOf) => {
  if (number <= 0 || powerOf <= 0) {
    throw new Error('ERROR::Number or power is less than or equal to zero');
  }
  return Math.pow(number, powerOf);
}

module.exports = {
  computeCeil, computeFloor, computeSquareRoot, computePower
}
