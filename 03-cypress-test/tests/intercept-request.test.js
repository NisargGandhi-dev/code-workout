const interceptRequest = require('../topics/intercept-request');

describe('Cypress Command Exercises - interceptRequest', () => {
  test('should have the correct command for intercepting a request', () => {
    expect(interceptRequest.trim()).toBe("cy.intercept('GET', '/api/users').as('getUsers')");
  });
});
