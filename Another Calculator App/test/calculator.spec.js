const assert = require('chai').assert;
const calculator = require('../calculator');

describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      it('Add two positive numbers, returning positive sum', function () {
        assert.equal(calculator('A', { lhs: 5, rhs: 3 }), 8);
      });

      it('Add two negative numbers, returning negative sum', function () {
        assert.equal(calculator('A', { lhs: -10, rhs: -2 }), -12);
      });

      it('Add two numbers, with one negative, producing subtracted output', function () {
        assert.equal(calculator('A', { lhs: 20, rhs: -7 }), 13);
      });

      it('Add zeros, produces zero', function () {
        assert.equal(calculator('A', { lhs: 0, rhs: 0 }), 0);
      });
    });

    describe('Subtraction functionality testing', function () {
      it('Subtract two positive numbers, returning positive result', function () {
        assert.equal(calculator('S', { lhs: 30, rhs: 10 }), 20);
      });

      it('Subtract two negative numbers, returning zero', function () {
        assert.equal(calculator('S', { lhs: -15, rhs: -15 }), 0);
      });

      it('Subtract two numbers, with one negative, producing sum', function () {
        assert.equal(calculator('S', { lhs: 24, rhs: -16 }), 40);
      });

      it('Subtract zeros, produces zero', function () {
        assert.equal(calculator('S', { lhs: 0, rhs: 0 }), 0);
      });
    });

    describe('Multiplication functionality testing', function () {
      it('Multiply two positive numbers, returning positive product', function () {
        assert.equal(calculator('M', { lhs: 3, rhs: 7 }), 21);
      });

      it('Multiply two negative numbers, returning positive product', function () {
        assert.equal(calculator('M', { lhs: -7, rhs: -7 }), 49);
      });

      it('Multiply two numbers, with one negative, producing negative product', function () {
        assert.equal(calculator('M', { lhs: 12, rhs: -2 }), -24);
      });

      it('Multiply zeros, produces zero', function () {
        assert.equal(calculator('M', { lhs: 0, rhs: 0 }), 0);
      });
    });

    describe('Division functionality testing', function () {
      it('Divide two positive numbers, returning positive quotient', function () {
        assert.equal(calculator('D', { lhs: 60, rhs: 12 }), 5);
      });

      it('Divide two negative numbers, returning positive quotient', function () {
        assert.equal(calculator('D', { lhs: -49, rhs: -7 }), 7);
      });

      it('Divide two numbers, with one negative, producing negative quotient', function () {
        assert.equal(calculator('D', { lhs: 121, rhs: -11 }), -11);
      });

      it('Should not divide by 0, producing "Can not divide by zero" message', function () {
        assert.equal(calculator('D', { lhs: 10, rhs: 0 }), 'Can not divide by zero');
      });
    });

    describe('Unknown operation testing', function () {
      it('Should not calculator if unknown operation is passed, producing "Unknown operation" message', function () {
        assert.equal(calculator('unknown', { lhs: 10, rhs: 20 }), 'Unknown operation');
      });
    });
  });
});