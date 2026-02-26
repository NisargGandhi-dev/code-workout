const numberExample = require('../topics/data-types-number');

describe('numberExample', () => {
  test('should return the sum of two numbers', () => {
    expect(numberExample(2, 3)).toBe(5);
  });
});