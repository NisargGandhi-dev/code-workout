const constExample = require('../topics/variables-const');

describe('constExample', () => {
  test('should demonstrate that const variables cannot be reassigned', () => {
    expect(constExample()).toBe(10);
  });
});