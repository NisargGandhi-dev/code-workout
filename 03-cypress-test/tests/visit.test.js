const visit = require('../topics/visit');

describe('Cypress Command Exercises - visit', () => {
  test('should have the correct visit command', () => {
    expect(visit.trim()).toBe("cy.visit('https://example.cypress.io')");
  });
});
