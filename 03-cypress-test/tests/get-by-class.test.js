const getByClass = require('../topics/get-by-class');

describe('Cypress Command Exercises - getByClass', () => {
  test('should have the correct command to get elements by class', () => {
    expect(getByClass.trim()).toBe("cy.get('.nav-item')");
  });
});
