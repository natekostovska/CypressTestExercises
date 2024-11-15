
import BillingFormPage from '../ECommerceSitePages/BillingFormPage';

describe('Add to Cart Test', () => {

    const billingFormPage = new BillingFormPage();
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
    beforeEach(() => {
        cy.visit('https://www.anhoch.com/');
    });

    it('Add item to cart', () => {
        // Simulate adding product to cart
        cy.get('.product-card').first().click(); // Select first product
        cy.get('.details-info-middle-actions').find('>button').click()
        cy.get('.sidebar-cart-actions').find('>a').eq(0).click(); // Add first product to cart
        cy.get('.count').should('contain', '1'); // Validate cart item count
        cy.get('.btn-proceed-to-checkout').click(); // Click checkout button
        cy.url().should('include', '/checkout'); // Ensure we are on the checkout page
        billingFormPage.addBillingData() // Call method from BillingFormPage
        cy.get('.purchasHeaderText').should('contain', 'Payment information');

    });
});

