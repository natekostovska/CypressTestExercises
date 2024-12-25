describe('File Upload and Download Automation', () => {
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
        cy.visit('https://demoqa.com/upload-download');
    });


    it('should upload a file', () => {
        cy.get('#uploadFile').selectFile('cypress/fixtures/files/textFileExample.txt')
        cy.get('#uploadFile').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'testFileExample.txt',
            mimeType: 'text/plain',
            lastModified: Date.now(),

        });

        // Verify file name appears 
        cy.get('#uploadedFilePath').should('contain', 'testFileExample.txt');
    });

    it('should download a file', () => {
        cy.get('#downloadButton').click();
        // Asserting the href value to ensure it's pointing to the correct file
        cy.get('#downloadButton').should('have.attr', 'download', 'sampleFile.jpeg');

    });

});

