const clone = require('../topics/clone');

describe("Git Command Quiz - clone", () => {
  test("should have the correct clone command", () => {
    expect(clone.trim()).toBe(
      "git clone https://github.com/example/repo.git",
    );
  });
});
