const isGreaterThan = require('../topics/conditions');

describe('isGreaterThan', () => {
  test('should return true if a is greater than b', () => {
    expect(isGreaterThan(3, 2)).toBe(true);
  });
  test('should return false if a is not greater than b', () => {
    expect(isGreaterThan(2, 3)).toBe(false);
  });
  test('should return false if a is equal to b', () => {
    expect(isGreaterThan(2, 2)).toBe(false);
  });
});