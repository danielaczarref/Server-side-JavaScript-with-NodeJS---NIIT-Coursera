const chalk = require("chalk");
const process = require('process');
const mathCalculator = require("./src/mathCalculator");
const scientificCalculator = require("./src/scientificCalculator");

const choice = process.argv[2];
const mathNum1 = 20;
const mathNum2 = 4;
const scfNum = 9.5;

if (choice === "math") {
  console.log('Addition of two numbers: ', mathCalculator.addNumbers(mathNum1,mathNum2), '\n');
  console.log('Subtraction of two numbers: ', mathCalculator.subNumbers(mathNum1, mathNum2), '\n');
  console.log('Multiplication of two numbers: ', mathCalculator.mulNumbers(mathNum1, mathNum2), '\n');
  console.log('Division of two numbers: ', mathCalculator.divNumbers(mathNum1, mathNum2), '\n');
  console.log('Modulo of two numbers: ', mathCalculator.moduloNumbers(mathNum1, mathNum2), '\n');

} else if (choice === "scientific") {
  console.log('Compute ceil value of number: ', scientificCalculator.computeCeil(scfNum), '\n');
  console.log('Compute floor value of number: ', scientificCalculator.computeFloor(scfNum), '\n');
  console.log('Compute square root of number: ', scientificCalculator.computeSquareRoot(scfNum), '\n');
  console.log('Compute exponential value of number: ', scientificCalculator.computePower(scfNum, 2), '\n');

} else {
  console.log("Please enter valid choice..!");
}