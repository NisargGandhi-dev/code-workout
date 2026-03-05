const mergeBranch = require('../topics/merge-branch');

describe("Git Command Quiz - mergeBranch", () => {
  test("should have the correct command to merge a branch", () => {
    expect(mergeBranch.trim()).toBe("git merge my-new-feature");
  });
});
