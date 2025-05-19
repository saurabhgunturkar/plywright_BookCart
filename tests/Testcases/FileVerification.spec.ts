import test, { expect } from "playwright/test";


test('image verification @verify', async ({ page }) => {
    await page.goto('https://www.example.com/');
    await expect(page).toHaveScreenshot('screenshots\example1s.png'); //verify the UI page

});