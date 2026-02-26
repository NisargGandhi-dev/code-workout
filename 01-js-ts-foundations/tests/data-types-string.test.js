const stringExample = require('../topics/data-types-string');

describe('stringExample', () => {
  test('should return a concatenated string', () => {
    expect(stringExample()).toBe('Hello, World!');
  });
});