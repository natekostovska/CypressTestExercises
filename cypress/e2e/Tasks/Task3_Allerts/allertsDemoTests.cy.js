describe('Alerts Demo Website Tests', () => {
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
        cy.visit('https://www.hyrtutorials.com/p/alertsdemo.html');
      
      });

    it('Accept and validate Text', () => {
        cy.get('#alertBox').click();
        cy.on('window:alert',(txt) =>{
            expect(txt).to.contains('I am an alert box!')
        })
    })

    it('Confirm dialog with OK', () => {
        cy.get('#confirmBox').scrollIntoView().click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.equal('Press a button!');
            return true;
        })
        cy.get('#output').should('contain.text', 'You pressed OK in confirmation popup')
    })

    it('Confirm dialog with Cancel', () => {
        cy.get('#confirmBox').click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.equal('Press a button!');
            return false;
        })
        cy.get('#output').should('contain.text', 'You pressed Cancel in confirmation popup')
    })

})