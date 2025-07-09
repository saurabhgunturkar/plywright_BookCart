import test from "playwright/test";
import { HomepPage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";


test.describe('User Registration Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        const homepage = new HomepPage(page);
        const loginpage = new LoginPage(page);
        const registerpage = new RegisterPage(page);
        await page.goto('/');
    });

    test('User Registration Test Case', async ({ page }) => {
        const homepage = new HomepPage(page);
        const loginpage = new LoginPage(page);
        const registerpage = new RegisterPage(page);

        await homepage.clickLoginButton();
        await loginpage.clickRegisterButton();
        await registerpage.enterFirstName('Sam');
        await registerpage.enterLastName('Doe');
        await page.waitForTimeout(100);
        await registerpage.enterUsername('samdoe1234554567');
        await page.waitForTimeout(100);
        await registerpage.enterPassword('Samdeo@123');
        await page.waitForTimeout(100);
        await registerpage.enterConfirmPassword('Samdeo@123');
        await registerpage.selectGender('Male');
        await page.waitForTimeout(200);
        await registerpage.clickRegisterButton();
        await page.waitForTimeout(200);
        console.log("New page title",await page.title());
        await page.screenshot({ path: 'screenshots/SuccessRegistration.png' });
        await page.waitForTimeout(200);
    });


    test('User Registration Test Case with test steps', async ({ page }) => {
        const homepage = new HomepPage(page);
        const loginpage = new LoginPage(page);
        const registerpage = new RegisterPage(page);

        await test.step('Click Login Button on Homepage', async () => {
            await homepage.clickLoginButton();
        });

        await test.step('Click Register Button on Login Page', async () => {
            await loginpage.clickRegisterButton();
        });

        await test.step('Enter First Name', async () => {
            await registerpage.enterFirstName('Sam');
        });

        await test.step('Enter Last Name', async () => {
            await registerpage.enterLastName('Doe');
        });

        await test.step('Enter Username', async () => {
            await page.waitForTimeout(100);
            await registerpage.enterUsername('samdoe123456');
        });

        await test.step('Enter Password', async () => {
            await page.waitForTimeout(100);
            await registerpage.enterPassword('Samdeo@123');
        });

        await test.step('Enter Confirm Password', async () => {
            await page.waitForTimeout(100);
            await registerpage.enterConfirmPassword('Samdeo@123');
        });

        await test.step('Select Gender', async () => {
            await registerpage.selectGender('Male');
        });

        await test.step('Click Register Button', async () => {
            await page.waitForTimeout(200);
            await registerpage.clickRegisterButton();
        });

        await test.step('Verify Registration Success', async () => {
            await page.waitForTimeout(200);
            console.log("New page title", await page.title());
            await page.screenshot({ path: 'screenshots/SuccessRegistration.png' });
            await page.waitForTimeout(200);
        });
    });





});



