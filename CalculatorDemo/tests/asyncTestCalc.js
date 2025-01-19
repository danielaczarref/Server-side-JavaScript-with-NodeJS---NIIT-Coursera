import * as chai from 'chai';
import asyncCalculator from '../src/asyncCalculator.js';
const expect = chai.expect;

describe('Asynchronous testing using Mocha and Chai', () => {
    it ('Should add data asynchronously', (done) => {
        var result = asyncCalculator.asyncAdd(3, 2, (res) => {
            expect(res).to.equal(5).to.be.a('number');
            done();
        })
    })

    it ('Should subtract data asynchronously', (done) => {
        var result = asyncCalculator.asyncSub(3, 2, (res) => {
            expect(res).to.equal(1).to.be.a('number');
            done();
        })
    })
})