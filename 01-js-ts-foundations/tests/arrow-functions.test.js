const add = require('../topics/arrow-functions');

describe('add (arrow function)', () => {
  test('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});