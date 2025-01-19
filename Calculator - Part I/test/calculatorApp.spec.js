const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {

  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    expect(addition(3,2)).to.equal(5).to.be.a('number');
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    expect(addition(-4,-5)).to.equal(-9).to.be.a('number');
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    expect(addition(10,-2)).to.equal(8).to.be.a('number');
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    expect(subtraction(15, 3)).to.equal(12).to.be.a('number');
  });
  it('Check if either of number is negative produce sum as output', () => {
    expect(subtraction(24,-6)).to.equal(30).to.be.a('number');
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    expect(subtraction(0,0)).to.equal(0).to.be.a('number');
  });
});
