const { test, expect } = require('@playwright/test');

test ('fileobjects demo', async({page}) => {

    await page.goto("https://www.saucedemo.com")
    await page.pause()
    await page.locator('[data-test="username"]').click()
    await page.locator('[data-test="username"]').fill('edison')
    await page.locator('[data-test="login-button"]').click()
    






})