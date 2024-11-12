
require('cypress-xpath');
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

describe('Buttons Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://demoqa.com/buttons');
    
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      if (err.message.includes('Script error')) {
          // Handle specific error message or type if needed
          return false;
      }
      // Optionally log the error to console if you want
      console.error(err);
      return false;
  });
    // Test case for double-clicking the button
    it('should double click the button and verify the message',{tags: '@smoke'}, () => {
      cy.get('#doubleClickBtn').dblclick();
      cy.contains('You have done a double click').should('be.visible');
    });
  
    // Test case for right-clicking the button
    it('should right-click the button and verify the message',{tags: '@regression'}, () => {
      cy.get('#rightClickBtn').rightclick();
      cy.contains('You have done a right click').should('be.visible');
    });
  
    // Test case for clicking the "Click Me" button
    it('should click the "Click Me" button and verify the message',{tags: '@smoke'}, () => {
      cy.get('button').eq(3).filter(':contains("Click Me")').click()
    //  cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[2]/div[3]/button').click();
      cy.contains('You have done a dynamic click').should('be.visible');
    });
  
    afterEach(() => {
      cy.log('All tests are running')
    });
  });