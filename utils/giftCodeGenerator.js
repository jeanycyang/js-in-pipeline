const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LENGTH = 52;
const NUMBERS = '0123456789';
const NUMBERS_LENGTH = 10;

function giftCodeGenerator(alphabetLength=6, numberLength=4) {
    if (isNaN(alphabetLength) || isNaN(numberLength)) {
        throw new Error('Length must be a number.');
    }
    let code = '';
    for (let i = 0; i < alphabetLength; i++) {
        code += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET_LENGTH));
    }
    for (let i = 0; i < numberLength; i++) {
        code += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS_LENGTH));
    }
    return code;
}

module.exports = giftCodeGenerator;
