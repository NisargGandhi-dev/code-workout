const commitChanges = require('../topics/commit-changes');

describe("Git Command Quiz - commitChanges", () => {
  test("should have the correct command to commit changes", () => {
    expect(commitChanges.trim()).toBe(
      'git commit -m "Add new feature"',
    );
  });
});
