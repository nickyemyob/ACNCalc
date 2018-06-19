const calculator = require('./calculator.js');

test('should be true when ACN is correct', () => {
    const inputtedACN = '004 085 616';
    const isValid = true;

    const calcuatedACN = calculator.calculateACN(inputtedACN); 

    // console.log(calcuatedACN);
    expect(calcuatedACN).toBeTruthy();
});

test('should be false when ACN is incorrect', () => {
    const inputtedACN = '104 085 616';
    const isValid = false;

    const calcuatedACN = calculator.calculateACN(inputtedACN); 

    // console.log(calcuatedACN);
    expect(calcuatedACN).toBeFalsy();
});