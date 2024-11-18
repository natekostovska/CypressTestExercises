import { faker } from '@faker-js/faker';

describe('Swagger Petstore - User Endpoints', () => {

  let user; // Declare a variable to hold the user data

  // Load user data from the fixture before the tests
  before(() => {
    cy.fixture('petUserData.json').then((userData) => {
      // Assign the loaded user data to the user variable
      user = userData;
    });
  });

  // Endpoint base URL
  const baseUrl = 'https://petstore.swagger.io/v2/user';

  // Create a user
  it('Create a User', () => {
    // Log the user data to see the content
    cy.log(user);
    cy.request({
      method: 'POST',
      url: baseUrl, // Endpoint to create a user
      body: user,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // Assert the response code is 200 (success)
      expect(response.status).to.eq(200);
    });
  });

  // Get User by Username
  it('Get User by Username', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/${user.username}`, // Use the username from the fixture data
    }).then((response) => {
      // Assert the response contains the expected user details
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(user.username);
      expect(response.body.firstName).to.eq(user.firstName);
      expect(response.body.lastName).to.eq(user.lastName);
    });
  });

  // Update User
  it('Update User', () => {
    // Modify user details for the update using Faker.js
    const updatedUser = {
      ...user,
      firstName: faker.name.firstName('female'),
      lastName: faker.name.lastName('female'),
    };

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/${user.username}`, // Use the original username for update
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

  // Delete User
  it('Delete User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/${user.username}`, // Use the username to delete the user
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
