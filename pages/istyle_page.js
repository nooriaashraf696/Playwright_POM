import { expect } from '@playwright/test';

export class IstylePage {
    constructor(page) {
        this.page = page;
        this.tradeLicenseInput = page.getByRole('textbox', { name: 'Enter Trade License No' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.recaptchaFrame = page.frameLocator('iframe[title="reCAPTCHA"]').locator('span[role="checkbox"]');
        this.categoryDropdown = page.locator('#category').getByRole('combobox');
        this.skuTextbox = page.locator('#sku').getByRole('textbox');
        this.quantityInput = page.getByLabel('Quantity *');
        this.addItemButton = page.getByTitle('Add item').getByRole('button');
        this.okButton = page.getByRole('button', { name: 'OK' });
    }

    async loginAndSolveCaptcha() {
        await this.page.goto('https://preprodportal.zensiontec.com/istyle/#/');
        await this.tradeLicenseInput.click();
        await this.tradeLicenseInput.fill('786');

        // Click CAPTCHA checkbox
        await this.recaptchaFrame.click();

        // Pause for manual CAPTCHA solving (only once)
        await this.page.pause();

        await this.submitButton.click();
        console.log("Login and CAPTCHA completed.");
    }

    async submitForm(existingUser) {
        await this.page.locator('label').filter({ hasText: 'NoYes' }).locator('div').click();
        await this.categoryDropdown.click();
        await this.page.getByText('Mobile Phones').click();
        await this.skuTextbox.click();

        if (existingUser) {
            await this.page.getByText('Apple iPhone 15 Pro Max 512GB White Titanium').click();
            await this.page.locator('#subscription_term').getByRole('textbox').click();
            await this.page.getByText('Months').click();
            await this.quantityInput.fill('1');
        } else {
            await this.page.getByText('Apple iPhone 15 128GB Black').click();
            await this.page.locator('#subscription_term').getByRole('textbox').click();
            await this.page.getByText('12 Months').click();
            await this.quantityInput.fill('4');
        }

        await this.addItemButton.click();
        await this.submitButton.click();
        await this.okButton.click();

        console.log(`Form submitted for ${existingUser ? "existing user with scrolling" : "existing user without scrolling"}`);
    }
}