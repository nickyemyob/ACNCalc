const calculator = require('./calculator.js');

test('calculates correct ACN number', () => {
    const inputtedACN = '004 085 616';
    const isValid = true;

    const calcuatedACN = calculator.calculateACN(inputtedACN); 

    expect(calcuatedACN).toBeTruthy();
});