const containsText = require('../topics/contains-text');

describe('Cypress Command Exercises - containsText', () => {
  test('should have the correct command to find an element by its text', () => {
    expect(containsText.trim()).toBe("cy.contains('Welcome')");
  });
});
