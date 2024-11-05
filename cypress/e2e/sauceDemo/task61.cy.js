/// <reference types="cypress" />
import AppActions from './task6';

describe('Purchase Item Tests', () => {
    it('Successfully purchases an item', () => {
        AppActions.login('standard_user', 'secret_sauce');
        AppActions.purchaseItem('Sauce Labs Backpack'); // Change to your item name
    });
});
