import { test, expect } from '@playwright/test';

// test('login', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button"]').click();
//     await page.waitForURL('https://www.saucedemo.com/inventory.html');
//         await page.close();
    

// });

// test('homepage', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button"]').click();
//     await page.waitForURL('https://www.saucedemo.com/inventory.html');
//     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//     await page.locator('[data-test="item-1-title-link"]').click();
//     await page.locator('[data-test="add-to-cart"]').click();
//         await page.close();
// });


// test('logout', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[data-test="username"]').fill('standard_user');
//     await page.locator('[data-test="password"]').fill('secret_sauce');
//     await page.locator('[data-test="login-button"]').click();
//     await page.waitForURL('https://www.saucedemo.com/inventory.html');
//     // await page.locator('button type="button" id="react-burger-menu-btn"').click();
//     // await page.locator('text=Logout').click(); 
//     // await page.waitForURL('https://www.saucedemo.com/');
//     // await page.pause();
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.locator('[data-test="logout-sidebar-link"]').click();
//      // await page.close();
// })


//hooks = beforeAll, beforeEach, afterAll, afterEach
//groups = use test.describe
test.describe('All My Tests', () => {


test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
        // await page.pause();
});



test('homepage', async({page}) => {
    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.locator('[data-test="login-button"]').click();
    // await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="item-1-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
        // await page.close();
});


test('logout', async({page}) => {
    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.locator('[data-test="login-button"]').click();
    // await page.waitForURL('https://www.saucedemo.com/inventory.html');
    // await page.locator('button type="button" id="react-burger-menu-btn"').click();
    // await page.locator('text=Logout').click(); 
    // await page.waitForURL('https://www.saucedemo.com/');
    // await page.pause();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    // await page.close();
});

test.afterAll(async({page}) => {
    await page.close();
})

});