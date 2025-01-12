
const lodash = require('lodash');

const findMaxValue = (arr) => {
  return lodash.max(arr);
}

const filterValues = (arr, threshold) => {
  const filteredArr = lodash.filter(arr, num => num > threshold);
  if (lodash.isEmpty(filteredArr)) return [];
  const firstValue = lodash.max(filteredArr);
  lodash.remove(filteredArr, num => num === firstValue);
  const secondValue = lodash.max(filteredArr);
  return lodash.filter(arr, num => [firstValue, secondValue].includes(num));
}

const nameInCapital = (arr) => {
  arr = lodash.toLower(arr);
  return lodash.startCase(arr);
}

module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital
}
