import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login'

test('test', async ({ page }) => {

  const login = new LoginPage(page)

  await login.GotoLoginPage()
  await login.Login('tomsmith', 'SuperSecretPassword!')

//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.getByLabel('Username').fill('to');
//   await page.getByLabel('Username').fill('tomsmith');
//   await page.getByLabel('Password').fill('SuperSecretPassword!');
//   await page.getByRole('button', { name: ' Login' }).click();

});