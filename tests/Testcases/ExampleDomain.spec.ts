import test, { expect } from "playwright/test";


test('Example Domain', async({page})=>{
    await page.goto('https://example.com');
    await page.screenshot({path:'screenshots/example.png'});
    const title = await page.title();
    console.log("Page Title:", title);
    await page.pause();  // Pauses the test execution and opens the Playwright Inspector
    const heading = await page.locator('h1').innerText();
    await expect(heading).toContain('Example Domain');
    
})