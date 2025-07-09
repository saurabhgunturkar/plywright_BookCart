import test, { expect } from "playwright/test";


test('image verification @verify', async ({ page }) => {
    await page.goto('https://www.example.com/');
    await page.screenshot({path:'screenshots/example1.png'}); //take screenshot of the page
    await expect(page).toHaveScreenshot('screenshots\example1s.png'); //verify the UI page

});