const arrayExample = require('../topics/array');

describe('arrayExample', () => {
  test('should return an array with a new element pushed', () => {
    expect(arrayExample()).toEqual([1, 2, 3, 4]);
  });
});