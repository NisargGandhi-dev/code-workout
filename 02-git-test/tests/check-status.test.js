const checkStatus = require('../topics/check-status');

describe("Git Command Quiz - checkStatus", () => {
  test("should have the correct command to check the status", () => {
    expect(checkStatus.trim()).toBe("git status");
  });
});
