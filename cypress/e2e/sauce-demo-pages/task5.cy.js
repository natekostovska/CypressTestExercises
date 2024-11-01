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
}

export default new AppActions();
