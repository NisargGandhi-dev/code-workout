const stageChanges = require('../topics/stage-changes');

describe("Git Command Quiz - stageChanges", () => {
  test("should have the correct command to stage all changes", () => {
    expect(stageChanges.trim()).toBe("git add .");
  });
});
