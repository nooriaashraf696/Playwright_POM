import { test, expect } from "@playwright/test";
import { Saucedemo } from "../pages/Saucedemo";

test('test', async ({ page }) => {

const obj = new Saucedemo(page)
await obj.GoToLoginPage()
await obj.sauceLogin('standard_user', 'secret_sauce')
await obj.addtocart_Checkout('Nooria', 'Ashraf', '1001')
})

