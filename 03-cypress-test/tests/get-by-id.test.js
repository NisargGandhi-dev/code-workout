const getById = require('../topics/get-by-id');

describe('Cypress Command Exercises - getById', () => {
  test('should have the correct command to get an element by ID', () => {
    expect(getById.trim()).toBe("cy.get('#main-content')");
  });
});
