const clickElement = require('../topics/click-element');

describe('Cypress Command Exercises - clickElement', () => {
  test('should have the correct click command', () => {
    expect(clickElement.trim()).toBe("cy.get('.submit-button').click()");
  });
});
