/// <reference types="cypress" />
describe('Sauce Demo Website Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Checks Title', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    describe('Login Feature Tests', () => {
        before(() => {
            cy.reload(); // Reloads the page just once
        })
    });

        it('Checks Login Form Visibility', () => {
            cy.get('input[name="user-name"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
        });


    after(() => {
        cy.log('Completed tests for Sauce Demo');
    });
});
