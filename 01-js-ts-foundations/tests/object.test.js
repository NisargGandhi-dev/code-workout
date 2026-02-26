const objectExample = require('../topics/object');

describe('objectExample', () => {
  test('should return an object with a new property added', () => {
    expect(objectExample()).toEqual({
      name: 'John',
      age: 30,
      city: 'New York'
    });
  });
});