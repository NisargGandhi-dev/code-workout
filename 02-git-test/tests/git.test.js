const answers = require("../git-test");

describe("Git Command Quiz", () => {
  test("should have the correct clone command", () => {
    expect(answers.clone.trim()).toBe(
      "git clone https://github.com/example/repo.git",
    );
  });

  test("should have the correct command to create a new branch", () => {
    expect(answers.createBranch.trim()).toBe("git checkout -b my-new-feature");
  });

  test("should have the correct command to stage all changes", () => {
    expect(answers.stageChanges.trim()).toBe("git add .");
  });

  test("should have the correct command to commit changes", () => {
    expect(answers.commitChanges.trim()).toBe(
      'git commit -m "Add new feature"',
    );
  });

  test("should have the correct command to push changes", () => {
    expect(answers.pushChanges.trim()).toBe("git push origin my-new-feature");
  });

  test("should have the correct command to check the status", () => {
    expect(answers.checkStatus.trim()).toBe("git status");
  });

  test("should have the correct command to pull changes", () => {
    expect(answers.pullChanges.trim()).toBe("git pull origin");
  });

  test("should have the correct command to merge a branch", () => {
    expect(answers.mergeBranch.trim()).toBe("git merge my-new-feature");
  });

  test("should have the correct command to list branches", () => {
    expect(answers.listBranches.trim()).toBe("git branch");
  });
});
