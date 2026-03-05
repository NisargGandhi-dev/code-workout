const pushChanges = require('../topics/push-changes');

describe("Git Command Quiz - pushChanges", () => {
  test("should have the correct command to push changes", () => {
    expect(pushChanges.trim()).toBe("git push origin my-new-feature");
  });
});
