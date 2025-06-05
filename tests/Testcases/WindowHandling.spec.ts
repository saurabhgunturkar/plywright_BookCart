import test from "playwright/test";
import { Helper } from "../utils/helper";

test('File Upload Test Suite', async ({ page }) => {
    const filePath = 'C:/Users/10740035/Desktop/sample.txt';
    await page.goto('https://practice.expandtesting.com/upload');
    await Helper.fileUploader(page, 'input[type="file"]', filePath);
    await page.locator('#fileSubmit').click();
    await page.screenshot({path:'screenshots/uploadfile.png'});
    console.log("File Uploaded");
});



test('Window Handling Test Suite', async ({ page, context }) => {
    // Open the main page
    await page.goto('https://demo.automationtesting.in/Windows.html');

    // Wait for new window to open when clicking the button
    const [openedPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for a new page event
        page.click('a[href="http://www.selenium.dev"]') // Click link to open new window
    ]);

    // Ensure the new page is loaded
    await openedPage.waitForLoadState();

    // Print the new page title
    console.log("New Page Title :", await openedPage.title());

    // Click 'Downloads' on the new page
    await openedPage.getByText('Downloads').click();
    
    // Print the new page title again
    console.log("New Page Title :", await openedPage.title());

    // Close the opened page
    await openedPage.close();
});