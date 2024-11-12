const registerCypressGrep = require('@cypress/grep')
describe('RadioButton Tests', () => {

    beforeEach(() => {
        // Visit the page before each test
        cy.visit('https://demoqa.com/radio-button');
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

    it('should select radio button and validate text', () => {
        cy.contains('label', 'Yes').click();
        cy.get('.text-success').should('contain.text', 'Yes');
    });

    it('should select the radio button "Impressive" and validate text', () => {
        cy.contains('label', 'Impressive').click();
        cy.get('.text-success').should('contain.text', 'Impressive');
    });

    it('should checkthat the radio button "No" is disabled', () => {
        cy.get('#noRadio').should('be.disabled'); 
    });
});