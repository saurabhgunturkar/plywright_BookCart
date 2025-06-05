import test from "playwright/test";


test('Demotest', async ({ page }) => {
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshots/example.png' });
    const title = await page.title();
    console.log("Page Title:", title);
    // await page.pause();  // Pauses the test execution and opens the Playwright Inspector
    const heading = await page.locator('h1').innerText();
    console.log("Heading:", heading);
    // Add any additional assertions or interactions here

});