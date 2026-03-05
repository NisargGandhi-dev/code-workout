const selectDropdown = require('../topics/select-dropdown');

describe('Cypress Command Exercises - selectDropdown', () => {
  test('should have the correct command for handling a dropdown', () => {
    expect(selectDropdown.trim()).toBe("cy.get('#my-dropdown').select('option-2')");
  });
});
