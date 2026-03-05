const checkCheckbox = require('../topics/check-checkbox');

describe('Cypress Command Exercises - checkCheckbox', () => {
  test('should have the correct command for handling a checkbox', () => {
    expect(checkCheckbox.trim()).toBe("cy.get('#remember-me').check()");
  });
});
