const consoleExample = require('../topics/console');

describe('consoleExample', () => {
  test('should call console.log', () => {
    const logSpy = jest.spyOn(console, 'log');
    consoleExample();
    expect(logSpy).toHaveBeenCalledWith('Hello, World!');
    logSpy.mockRestore();
  });
});