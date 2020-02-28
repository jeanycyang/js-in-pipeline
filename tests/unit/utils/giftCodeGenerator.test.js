const giftCodeGenerator = require('../../../utils/giftCodeGenerator');

describe('giftCodeGenerator', () => {
  it('should throw an error if any parameter is not a number', () => {
    expect(() => giftCodeGenerator('ABC', 12)).toThrow(new Error('Length must be a number.'));
    expect(() => giftCodeGenerator(12, 'ccc')).toThrow(new Error('Length must be a number.'));
    expect(() => giftCodeGenerator('aaa', 'bbb')).toThrow(new Error('Length must be a number.'));
  });
  it('should generate a gift code using default parameters', () => {
    expect(giftCodeGenerator().length).toEqual(10);
  });
  it('should generate a gift code with correct length', () => {
    expect(giftCodeGenerator(2, 2).length).toEqual(4);
  });
  it('should generate a gift code correctly', () => {
    const giftCode = giftCodeGenerator(2, 2);
    expect(giftCode[0]).toMatch(/[a-zA-Z]/);
    expect(giftCode[1]).toMatch(/[a-zA-Z]/);
    expect(giftCode[2]).toMatch(/[0-9]/);
    expect(giftCode[3]).toMatch(/[0-9]/);
  });
});
