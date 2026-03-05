const createBranch = require('../topics/create-branch');

describe("Git Command Quiz - createBranch", () => {
  test("should have the correct command to create a new branch", () => {
    expect(createBranch.trim()).toBe("git checkout -b my-new-feature");
  });
});
