import { faker } from '@faker-js/faker';
describe('Swagger Petstore - User Endpoints', () => {
  
    // Define a user object for testing
    const user = {
      id: 10,  
      username: faker.internet.username(),
      firstName: faker.person.firstName('female'),
      lastName: faker.person.lastName('female'),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.number({ style: 'national' }),
      userStatus: 1,
    };

    // Endpoint base URL
    const baseUrl = 'https://petstore.swagger.io/v2/user';
  
    // Create a user
    it('Create a User', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}`, // Endpoint to create a user
        body: user,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Assert the response code is 200 (success)
        expect(response.status).to.eq(200);
      });
    });
  

    
    it('Get User by Username', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/${user.username}`, // Endpoint to get the user by username
      }).then((response) => {
        // Assert the response contains the expected user details
        expect(response.status).to.eq(200);
        expect(response.body.username).to.eq(user.username);
        expect(response.body.firstName).to.eq(user.firstName);
        expect(response.body.lastName).to.eq(user.lastName);
      });
    });
  
    it('Update User', () => {
      // Modify user details for the update
      const updatedUser = { ...user, firstName: faker.person.firstName('female'), lastName: faker.person.lastName('female') };
  
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/${user.username}`, // Endpoint to update user
        body: updatedUser,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Assert the response code is 200 (success)
        expect(response.status).to.eq(200);
      });
  
      // Verify if the user details were updated
      cy.request({
        method: 'GET',
        url: `${baseUrl}/${user.username}`,
      }).then((response) => {
        expect(response.body.firstName).to.eq(updatedUser.firstName);
        expect(response.body.lastName).to.eq(updatedUser.lastName);
      });
    });
  
    it('Delete User', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/${user.username}`, // Endpoint to delete the user
      }).then((response) => {
        // Assert the response code is 200 (success)
        expect(response.status).to.eq(200);
        expect(response.body.message).to.include(user.username);
      });
  
      // Try to get the user after deletion and assert that the user is not found
      cy.request({
        method: 'GET',
        url: `${baseUrl}/${user.username}`,
        failOnStatusCode: false, // Do not fail the test on 404
      }).then((response) => {
        // Assert the user no longer exists
        expect(response.status).to.eq(404);
      });
    });
  
  });
  
  