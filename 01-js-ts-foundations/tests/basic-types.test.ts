import basicTypesExample from '../topics/basic-types';

describe('basicTypesExample', () => {
  test('should return a string with basic types', () => {
    expect(basicTypesExample('John', 30, false)).toBe('Name: John, Age: 30, Is Student: false');
  });
});