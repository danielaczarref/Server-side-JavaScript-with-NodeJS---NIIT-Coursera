const addition = (num1, num2) => {
  return num1 + num2;
};

const subtraction = (num1, num2) => {
  return num1 - num2;
};

const multiplication = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  return num2 !== 0 ? num1/num2 : 'error';
};

module.exports = { addition, subtraction, multiplication, division };
