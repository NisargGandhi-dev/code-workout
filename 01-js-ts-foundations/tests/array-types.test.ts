import arrayTypesExample from '../topics/array-types';

describe('arrayTypesExample', () => {
  test('should return a string with array types', () => {
    expect(arrayTypesExample([1, 2, 3], ['a', 'b', 'c'])).toBe('Numbers: 1, 2, 3, Strings: a, b, c');
  });
});