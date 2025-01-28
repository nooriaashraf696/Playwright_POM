import { test } from '@playwright/test';
import { IstylePage } from '../pages/istyle_page';

test('Existing user without scrolling data on selection', async ({ page }) => {
    const istyle = new IstylePage(page);

    await istyle.loginAndSolveCaptcha(); // Login only once
    await istyle.submitForm(false); // Submit form without scrolling
});

test('Existing user with scrolling data on selection', async ({ page }) => {
    const istyle = new IstylePage(page);

    await istyle.loginAndSolveCaptcha(); // Login only once
    await istyle.submitForm(true); // Submit form with scrolling
});