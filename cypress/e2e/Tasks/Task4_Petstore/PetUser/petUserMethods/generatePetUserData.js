const fs = require('fs'); // Node.js File System module
const { faker } = require('@faker-js/faker');

// Generate user data using Faker.js
const user = {
  id: 10,
  username: faker.internet.username(),
  firstName: faker.person.firstName('female'), // Generate a random female first name
  lastName: faker.person.lastName('female'),   // Generate a random female last name
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number({ style: 'national' }),
  userStatus: 1
};

// Convert the user object to a JSON string
const userData = JSON.stringify(user, null, 2);

// Write the JSON data to a file (e.g., `petUserData.json`)
fs.writeFileSync('./cypress/fixtures/petUserData.json', userData);

console.log('User data generated and saved to petUserData.json');
