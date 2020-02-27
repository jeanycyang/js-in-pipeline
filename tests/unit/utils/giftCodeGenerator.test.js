const giftCodeGenerator = require('../../../utils/giftCodeGenerator');

describe('giftCodeGenerator', () => {
  it('should throw an error if any parameter is not a number', () => {
    expect(() => giftCodeGenerator('ABC', 12)).toThrow(new Error('Length must be a number.'));
    expect(() => giftCodeGenerator(12, 'ccc')).toThrow(new Error('Length must be a number.'));
    expect(() => giftCodeGenerator('aaa', 'bbb')).toThrow(new Error('Length must be a number.'));
  });
});
