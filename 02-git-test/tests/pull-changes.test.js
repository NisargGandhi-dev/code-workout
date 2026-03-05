const pullChanges = require('../topics/pull-changes');

describe("Git Command Quiz - pullChanges", () => {
  test("should have the correct command to pull changes", () => {
    expect(pullChanges.trim()).toBe("git pull origin");
  });
});
