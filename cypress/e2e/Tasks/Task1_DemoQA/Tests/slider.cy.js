require('cypress-xpath')
describe('Slider Test', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('Script error')) {
                // Handle specific error message or type if needed
                return false;
            }
            // Optionally log the error to console if you want
            console.error(err);
            return false;
        })
        // Visit the page containing the slider (adjust the URL as needed)
        cy.visit('https://demoqa.com/slider');
    });


    it('should move the slider to 80', () => {
      cy.get('#sliderContainer input[type=range]').should('have.value',25)
      .invoke('val',80)
      .trigger('change')
      cy.get('#sliderContainer input[type=range]').should('have.value',80)

    });

    it('should move the slider to 80 and update input field to 80 when slider is moved', () => {
      const setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set

      cy.get('#sliderContainer input[type=range]').should('have.value',25)
      .then(($slider)=>{
        setValue.call($slider[0],80)
      })
      .trigger('change')
      cy.get('#sliderContainer input[type=range]').should('have.value',80)

    });
    
});
