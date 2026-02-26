const letExample = require('../topics/variables-let');

describe('letExample', () => {
  test('should demonstrate block scope of let', () => {
    // We can't directly test the console.log output in this simple setup,
    // but we can test the final returned value.
    expect(letExample()).toBe(10);
  });
});