import test from "playwright/test";
import { Helper } from "../Utils/helper";




test('Window Handling Test Suite', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demo.automationtesting.in/Windows.html');

    const newPage = await Helper.openNewWindow(context, page, 'a[href="http://www.selenium.dev"] >> button');

    console.log("New Page Title :", await newPage.title());
    await newPage.getByText('Downloads').click();
    
    console.log("New Page Title :", await newPage.title());
    await newPage.close();

});


test('File Upload Test Suite', async ({ page }) => {
    const filePath = 'C:/Users/10740035/Desktop/sample.txt';
    await page.goto('https://practice.expandtesting.com/upload');
    await Helper.fileUploader(page, 'input[type="file"]', filePath);
    await page.locator('#fileSubmit').click();
    await page.screenshot({path:'screenshots/uploadfile.png'});
    console.log("File Uploaded");
});