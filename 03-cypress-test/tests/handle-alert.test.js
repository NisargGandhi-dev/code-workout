const handleAlert = require('../topics/handle-alert');

describe('Cypress Command Exercises - handleAlert', () => {
  test('should have the correct command for handling an alert', () => {
    expect(handleAlert.trim()).toBe("cy.on('window:alert', (str) => { expect(str).to.equal('Are you sure?') })");
  });
});
