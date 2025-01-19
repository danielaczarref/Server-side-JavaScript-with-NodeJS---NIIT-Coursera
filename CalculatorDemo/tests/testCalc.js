import * as chai from 'chai';
import calculator from '../src/calculator.js';
const expect = chai.expect;

describe('Testing Calculator functionalities', () => {
    describe('Testing addition functionality', () => {
        it('2+2 should be equal to 4', () => {
            expect(calculator.addition(2,2)).to.equal(4)
        })

        it('adding two numbers', () => {
            expect(calculator.addition(12,34)).to.equal(46)
            expect(calculator.addition(10,-1)).to.equal(9)
            expect(calculator.addition(1028,237)).to.equal(1265)
        })
    })

    describe('Testing division functionality', () => {
        it('Dividing two numbers', () => {
            expect(calculator.division(30,6)).to.equal(5)
            expect(calculator.division(-25,2)).to.equal(-12.5)
            expect(calculator.division(-18,-3)).to.equal(6)
        })
        it('It should return NaN if denominator is zero', () => {
            expect(calculator.division(5,0)).to.equal(undefined)
            expect(calculator.division(24,0)).to.equal(undefined)
            expect(calculator.division(1578,0)).to.equal(undefined)
        })
    })
})