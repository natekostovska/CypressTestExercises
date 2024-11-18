describe('Automation Demo site Tests', () => {
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
        // Visit the page before each test
        cy.visit('https://demo.automationtesting.in/Alerts.html');
      
      });

    it('Accept and validate Text', () => {
        cy.get('#OKTab').find('>button').filter('.btn-danger').click();
        cy.on('window:alert',(txt) =>{
            expect(txt).to.contains('I am an alert box!')
        })
    })

    it('Confirm dialog with OK', () => {
        cy.get('.analystic').eq(1).click()
        cy.get('#CancelTab').find('>button').filter('.btn-primary').click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.equal('Press a Button !');
            return true;
        })
        cy.get('#demo').should('contain.text', 'You pressed Ok')
    })

    it('Confirm dialog with Cancel', () => {
        cy.get('.analystic').eq(1).click()
        cy.get('#CancelTab').find('>button').filter('.btn-primary').click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.equal('Press a Button !');
            return false;
        })
        cy.get('#demo').should('contain.text', 'You Pressed Cancel')
    })

})