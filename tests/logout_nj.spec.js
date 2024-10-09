import { test, expect } from '@playwright/test';
import {Logout} from '../pages/logout_nj'

test('test', async ({ page }) => {
  
  
    const Logoutvar = new Logout(page)
    await Logoutvar.GoToURL()
    await Logoutvar.loginfunc('tomsmith', 'SuperSecretPassword!')
    await Logoutvar.logoutfunc()
  
//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('tomsmith');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('SuperSecretPassword!');
//   await page.getByRole('button', { name: ' Login' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
});