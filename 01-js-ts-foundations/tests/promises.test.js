const { createPromise } = require('../topics/promises');

describe('Promises', () => {
  test('createPromise should resolve with "Promise resolved" after 1 second', async () => {
    jest.useFakeTimers();
    const promise = createPromise();
    jest.runAllTimers();
    await expect(promise).resolves.toBe('Promise resolved');
    jest.useRealTimers();
  });
});