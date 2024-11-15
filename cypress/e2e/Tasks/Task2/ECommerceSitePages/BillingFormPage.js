import { faker } from '@faker-js/faker';

// creating a class only for methods that i can call in the tests, the name f the classes have only .js if cy.js is added it means that we have tests in that class so sypress can run them

class BillingPage {

    addBillingData() {
        // Faker values should not be defined as constanst with const as they are constantly changed when we are calling the test, constant are just for values 
        //that are never changing
        let firstName = faker.person.firstName('female')
        let lastName = faker.person.lastName('female');
        let email = faker.internet.email();
        let phone = faker.phone.number({ style: 'national' });
        let address = faker.location.streetAddress();

        // Need to add all mandatory fields so the Postavi narachka field will be enabled and clickable

        cy.get('#billing-first-name').wait(2000);
        cy.get('#billing-first-name').type(firstName, { force: true });
        cy.get('#billing-last-name').type(lastName, { force: true });
        cy.get('#phone').type(phone, { force: true }).wait(2000);
        cy.get('#email').type(email, { force: true }).wait(2000);
        cy.get('#billing-address-1').type(address, { force: true });
        cy.get('#billing-country').select('1') // To choose Skopje as city
        cy.get('#app > section.checkout-wrap > div > form > div > aside > div > div.order-summary-bottom > div > div > label').click() // to click checkbox
        cy.get('.order-summary-bottom').find('>button').filter('.btn-place-order').click();
    }
}

export default BillingPage;
