const person = require('../topics/this-keyword');

describe('this keyword', () => {
  test('greet method should return a greeting with the correct name', () => {
    expect(person.greet()).toBe('Hello, my name is Alice');
  });
});