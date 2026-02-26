const exercises = require('../cypress-exercises');

describe('Cypress Command Exercises', () => {
  test('should have the correct visit command', () => {
    expect(exercises.visit.trim()).toBe("cy.visit('https://example.cypress.io')");
  });

  test('should have the correct command to get an element by ID', () => {
    expect(exercises.getById.trim()).toBe("cy.get('#main-content')");
  });

  test('should have the correct command to get elements by class', () => {
    expect(exercises.getByClass.trim()).toBe("cy.get('.nav-item')");
  });

  test('should have the correct click command', () => {
    expect(exercises.clickElement.trim()).toBe("cy.get('.submit-button').click()");
  });

  test('should have the correct command to find an element by its text', () => {
    expect(exercises.containsText.trim()).toBe("cy.contains('Welcome')");
  });

  test('should have the correct assertion for existence', () => {
    expect(exercises.shouldExist.trim()).toBe("cy.get('#logo').should('exist')");
  });

  test('should have the correct assertion for a value', () => {
    expect(exercises.shouldHaveValue.trim()).toBe("cy.get('.username').should('have.value', 'testuser')");
  });

  test('should have the correct command for handling a dropdown', () => {
    expect(exercises.selectDropdown.trim()).toBe("cy.get('#my-dropdown').select('option-2')");
  });

  test('should have the correct command for handling a checkbox', () => {
    expect(exercises.checkCheckbox.trim()).toBe("cy.get('#remember-me').check()");
  });

  test('should have the correct command for handling an alert', () => {
    expect(exercises.handleAlert.trim()).toBe("cy.on('window:alert', (str) => { expect(str).to.equal('Are you sure?') })");
  });

  test('should have the correct command for intercepting a request', () => {
    expect(exercises.interceptRequest.trim()).toBe("cy.intercept('GET', '/api/users').as('getUsers')");
  });
});
