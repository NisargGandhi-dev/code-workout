const listBranches = require('../topics/list-branches');

describe("Git Command Quiz - listBranches", () => {
  test("should have the correct command to list branches", () => {
    expect(listBranches.trim()).toBe("git branch");
  });
});
