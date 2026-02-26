const booleanExample = require('../topics/data-types-boolean');

describe('booleanExample', () => {
  test('should return true if the numbers are equal', () => {
    expect(booleanExample(2, 2)).toBe(true);
  });
  test('should return false if the numbers are not equal', () => {
    expect(booleanExample(2, 3)).toBe(false);
  });
});