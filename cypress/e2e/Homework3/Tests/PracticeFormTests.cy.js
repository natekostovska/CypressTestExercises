import { faker } from '@faker-js/faker';
describe('Registration Form Tests', () => {
  
  beforeEach(() => {
    // Visit the registration form before each test
    cy.visit('https://demoqa.com/automation-practice-form');
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
  it('Fill and submit registration form', () => {
    let userEmailFaker=faker.internet.email();
    // tag: sanity
    // Fill out the form fields
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type(userEmailFaker);
    cy.get('#userNumber').type('1234567890');

    // Select gender radio button
    cy.contains('label', 'Male').click();

    // Selectcheckboxes
    cy.contains('label', 'Reading').click();
    cy.contains('label', 'Sports').click();

    // Select subject
    cy.get('#subjectsInput').type('Math{enter}');

    // Select the state and city
    cy.get('#state').click();
    cy.contains('div', 'NCR').click(); 
    cy.get('#city').click();
    cy.contains('div', 'Delhi').click(); 

    // Click the submit button
    cy.get('#submit').click();

    // Validate submission
    cy.get('.modal-content').should('contain.text', 'John Doe');
    cy.get('.modal-content').should('contain.text', userEmailFaker);
  });
});