import { test, expect } from '@playwright/test';


test.describe('All my tests', () =>{


test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

})

test.afterAll(async ({browser}) => {
    await browser.close();
})

test('Home', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('#item_0_title_link').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

})

test('Logout', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('div').filter({ hasText: /^All ItemsAboutLogoutReset App State$/ }).click();
    await page.getByRole('link', { name: 'Logout' }).click();


})
})