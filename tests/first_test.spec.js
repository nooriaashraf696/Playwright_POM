const {test, expect} = require ('@playwright/test')
// const {hello, helloworld} = require ('./demo/helloworld')

// import {hello, helloworld} from './demo/helloworld'

// hello();

test ('My first test', async({page}) =>{
await page.goto ("https://www.google.com")
await expect(page).toHaveTitle('Google')
})