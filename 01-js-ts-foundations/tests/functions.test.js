const add = require('../topics/functions');

describe('add', () => {
  test('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});