import { expect, test } from '@playwright/test';
import AddComputerPage from './pageobjectmodel/pages/addComputer.page';
import ComputerPage from './pageobjectmodel/pages/computers.page';
import ComputerPage from './pageobjectmodel/pages/computers.page';

test("Basic test", async ({ page }) => {
    await page.goto("https://computer-database.gatling.io/computers/new");
    await page.getByLabel('Computer name').click();
    await page.getByLabel('Computer name').fill('commitQuality');
    await page.getByLabel('Introduced').click();
    await page.getByLabel('Introduced').fill('1999-11-11');
    await page.getByLabel('Discontinued').click();
    await page.getByLabel('Discontinued').fill('2000-11-11');
    await page.getByLabel('Company').selectOption('1');
    await page.getByRole('button', { name: 'Create this computer' }).click();

    await expect(page.getByText("Done ! Computer commitQuality has been created")).toBeVisible();


})
test("Basic test POM", async ({ page }) => {
    const ComputerPage = new ComputerPage(page);
    const addComputerPage = new AddComputerPage(page);

    await ComputerPage.goto();
    await addComputerPage.clickAddNewComputer();

    await addComputerPage.clickAddNewComputer();

    await expect(page.getByText("Done ! Computer commitQuality has been created")).toBeVisible();


}
);
