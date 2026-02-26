const { fetchData, processData } = require('../topics/async-await');

describe('Async/Await', () => {
  test('fetchData should resolve with "Data loaded" after 1 second', async () => {
    jest.useFakeTimers();
    const promise = fetchData();
    jest.runAllTimers();
    await expect(promise).resolves.toBe('Data loaded');
    jest.useRealTimers();
  });

  test('processData should return the result of fetchData', async () => {
    jest.useFakeTimers();
    const promise = processData();
    jest.runAllTimers();
    await expect(promise).resolves.toBe('Data loaded');
    jest.useRealTimers();
  });
});