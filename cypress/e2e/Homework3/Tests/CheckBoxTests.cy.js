import CheckBoxPage from '../Pages/Elements/CheckBoxPage'; // Import the CheckBoxPage class

describe('Checkbox Tests', () => {
  const checkBoxPage = new CheckBoxPage();

  beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox');
  });
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
  it('should check and uncheck checkboxes and verify the result', () => {
    // Expand the Home section and Desktop, Documents, Downloads
    checkBoxPage.expandHome();
    checkBoxPage.expandUnderHome('Desktop');
    checkBoxPage.expandUnderHome('Downloads');
    checkBoxPage.expandUnderHome('Documents');
    
    // Expand WorkSpace and Office under Documents
    checkBoxPage.expandUnderDocuments('WorkSpace');
    checkBoxPage.expandUnderDocuments('Office');
    
    // Select the 'Desktop' checkbox
    checkBoxPage.checkBoxElements('Desktop');
    // Select the 'Documents' checkbox
    checkBoxPage.checkBoxElements('Documents');
    // Select the 'Downloads' checkbox
    checkBoxPage.checkBoxElements('Downloads');
    
    //Assert You have selected text
    cy.get('span').filter(':contains("You have selected :")').should('have.text','You have selected :')
     // Assert the text under the result
    cy.get('#result').find('>span').filter('.text-success').should('have.text','homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')

  });
});