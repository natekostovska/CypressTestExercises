import AppActions from '../sauce-demo-pages/task6.cy';

describe('Purchase Item Tests', () => {
    it('Successfully purchases an item', () => {
        AppActions.login('standard_user', 'secret_sauce');
        AppActions.purchaseItem('Sauce Labs Backpack'); // Change to your item name
    });
});
