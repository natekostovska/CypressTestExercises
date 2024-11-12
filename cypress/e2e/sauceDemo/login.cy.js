/// <reference types="cypress" />

describe('Sauce Demo Website Tests', () => {
    it('Visits Sauce Demo and Checks Title', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq', 'Swag Labs');
    });

    describe('Login Feature Tests', () => {
        it('Checks Login Form Visibility', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('input[name="user-name"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
        });
    });
});

