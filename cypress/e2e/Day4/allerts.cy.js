describe('Sauce Demo Website Tests', () => {
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

    // skip a test it.skip

    it('Accept and validate Text', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').eq(0).click();
        cy.on('window:alert',(txt) =>{
            expect(txt).to.contains('You clicked a button')
        })
    })

    it('Confirm dialog with OK', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').eq(0).click();
        cy.on('window:alert',(txt) =>{
            return true;
        })
    })

    it('Confirm dialog with Cancel', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').eq(0).click();
        cy.on('window:confirm',(txt) =>{
            return false;
        })
    })

})