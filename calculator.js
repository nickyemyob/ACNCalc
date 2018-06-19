
module.exports = {
    calculateACN: (ACN) => {
        const ACNToDigits = convertToDigits(ACN);
        const numbersToCalculate = ACNToDigits.slice(0,ACNToDigits.length - 1);
        const checkDigit = ACNToDigits[ACNToDigits.length - 1];

        const reducer = (accumulator, currentValue, index) => {
            let answer = accumulator + (currentValue * (index + 1));
            return answer;
        };
        
        const calculatedCheckDigit = numbersToCalculate.reverse().reduce(reducer, 0);
        const remainder = calculatedCheckDigit % 10;
        const complement = 10 - remainder;
        return complement === checkDigit;
    }
}

const convertToDigits = taxNumber => {
    const digits = taxNumber
      .replace(/[^\d]/g, '')
      .split('')
      .map(Number);
    return digits;
  };
