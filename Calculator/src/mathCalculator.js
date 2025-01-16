const addNumbers = (number1, number2) => {
  return number1 + number2;
}
const subNumbers = (number1, number2) => {
  return number1 - number2;
}
const mulNumbers = (number1, number2) => {
  return number1 * number2;
}
const divNumbers = (number1, number2) => {
  if (number2 == 0) {
    throw new Error('ERROR::Divide by zero error..!');
  }
  return number1 / number2;
}
const moduloNumbers = (number1, number2) => {
  if (number2 == 0) {
    throw new Error('ERROR::Invalid number..!');
  }
  return number1 % number2;
}

module.exports = {
  addNumbers, subNumbers, mulNumbers, divNumbers, moduloNumbers
}
