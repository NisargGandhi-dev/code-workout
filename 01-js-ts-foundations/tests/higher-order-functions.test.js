const { mapNumbersToSquared, filterObjectsByType, reduceNumbersToSum } = require('../topics/higher-order-functions');

describe('Higher-Order Functions', () => {
  test('mapNumbersToSquared should square each number in an array', () => {
    expect(mapNumbersToSquared([1, 2, 3])).toEqual([1, 4, 9]);
  });

  test('filterObjectsByType should filter objects based on a given type', () => {
    const data = [{
      id: 1,
      type: 'A'
    }, {
      id: 2,
      type: 'B'
    }, {
      id: 3,
      type: 'A'
    }];
    expect(filterObjectsByType(data, 'A')).toEqual([{
      id: 1,
      type: 'A'
    }, {
      id: 3,
      type: 'A'
    }]);
  });

  test('reduceNumbersToSum should return the sum of all numbers in an array', () => {
    expect(reduceNumbersToSum([1, 2, 3, 4])).toBe(10);
  });
});