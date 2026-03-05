const shouldExist = require('../topics/should-exist');

describe('Cypress Command Exercises - shouldExist', () => {
  test('should have the correct assertion for existence', () => {
    expect(shouldExist.trim()).toBe("cy.get('#logo').should('exist')");
  });
});
