/// <reference types="cypress" />
import AppActions from './task5';

describe('Login Feature Tests with App Actions', () => {
    const testData = [
        { username: 'standard_user', password: 'secret_sauce', expected: 'Swag Labs' },
        { username: 'invalid_user', password: 'wrong_password', expected: 'Username and password do not match any user in this service' }
    ];

    testData.forEach((data) => {
        it(`Tests login with username: ${data.username}`, () => {
            AppActions.login(data.username, data.password);
            if (data.expected === 'Swag Labs') {
                AppActions.checkTitle(data.expected);
            } else {
                AppActions.checkLoginError(data.expected);
            }
        });
    });
});
