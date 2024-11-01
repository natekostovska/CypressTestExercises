class AppActions {
    visitWebsite() {
        cy.visit('https://www.saucedemo.com/');
    }

    login(username, password) {
        this.visitWebsite();
        cy.get('input[name="user-name"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[type="submit"]').click();
    }

    checkTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }

    checkLoginError(expectedMessage) {
        cy.contains(expectedMessage).should('be.visible');
    }

    purchaseItem(itemName) {
        cy.contains(itemName).click(); // Clicks on the item
        cy.get('button.btn_primary.btn_inventory').click(); // Add to cart
        cy.get('.shopping_cart_link').click(); // Go to cart
        cy.get('button#checkout.btn.btn_action.btn_medium.checkout_button').click(); // Checkout
        cy.get('input[name="firstName"]').type('John'); // Fill in details
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="postalCode"]').type('12345');
        cy.get('input[type="submit"]').click(); // Continue
        cy.get('button.btn_action.cart_button').click(); // Finish
        cy.contains('Thank you for your order!').should('be.visible'); // Confirm purchase
    }
}

export default new AppActions();
