const shouldHaveValue = require('../topics/should-have-value');

describe('Cypress Command Exercises - shouldHaveValue', () => {
  test('should have the correct assertion for a value', () => {
    expect(shouldHaveValue.trim()).toBe("cy.get('.username').should('have.value', 'testuser')");
  });
});
