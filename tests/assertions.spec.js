import { test, expect } from '@playwright/test';

test ('assertions', async({page}) => {

await page.goto('https://kitchen.applitools.com/')
await page.pause()

//Assertions
//Check element present or not
await expect (page.locator('text=The Kitchen')).toHaveCount(1)

if (await page.$('text=The Kitchen')){
    await page.locator('text=The Kitchen').click()
}

//check the element is visible or hidden
await expect(page.locator('text=The Kitchen')).toBeVisible
await expect(page.locator('text=The Kitchen')).toBeHidden

//check the element is enabled or disabled
await expect(page.locator('text=The Kitchen')).toBeEnabled
await expect(page.locator('text=The Kitchen')).toBeDisabled

//check text
await expect(page.locator('text=The Kitchen')).toHaveText
await expect(page.locator('text=The Kitchen')).not.toHaveText

//check url 
await expect(page).toHaveURL

//check title
await expect(page).toHaveTitle

//check screenshot
await expect(page).toHaveScreenshot

})