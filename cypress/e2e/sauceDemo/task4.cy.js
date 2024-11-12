
describe('Login Feature Tests', () => {
    const testData = [
        { username: 'standard_user', password: 'secret_sauce', expected: 'Swag Labs' },
        { username: 'invalid_user', password: 'wrong_password', expected: 'Username and password do not match any user in this service' }
    ];

    testData.forEach((data) => {
        it(`Tests login with username: ${data.username}`, () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('input[name="user-name"]').type(data.username);
            cy.get('input[name="password"]').type(data.password);
            cy.get('input[type="submit"]').click();
            
            if (data.expected === 'Swag Labs') {
                cy.title().should('eq', data.expected);
            } else {
                cy.contains(data.expected).should('be.visible');
            }
        });
    });
});
