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

it('Accept and validate Text', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.get('.rt-table').find('.rt-tbody').find('.rt-rt-group').find('.rt-tr').find('.rt-te -odd').as('table')
  // cy.get('@table').find('.rt-td').eq(6).find('.action-buttons').find('#delete-record-1').click()
  cy.get('@table').find('.rt-td').eq(6).find('.action-buttons').find('span').as('buttons')
  cy.get('@buttons').eq(0).click()  // 0 edit and 1 is to delete


})