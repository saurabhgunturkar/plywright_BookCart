import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe.only("User Login", async () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test("should visible the username textfield ", async () => {
        expect(loginPage.usernameField).toBeDefined();
        expect(await loginPage.usernameField.isVisible()).toBeTruthy();
        expect(await loginPage.usernameField.isEnabled()).toBeTruthy();
    });

    test("should show error message for empty username", async ({ page }) => {
        await loginPage.usernameField.click();
        await loginPage.passwordField.click();
        expect(await loginPage.errorMessage.isVisible()).toBeTruthy();
        expect(await loginPage.getErrorMessage()).toBe("Username is required");
    });

    test("should visible the password textfield ", async () => {
        expect(loginPage.passwordField).toBeDefined();
        expect(await loginPage.passwordField.isVisible()).toBeTruthy();
        expect(await loginPage.passwordField.isEnabled()).toBeTruthy();
    });

    test("should show error message for empty password", async ({ page }) => {
        await loginPage.passwordField.click();
        await loginPage.usernameField.click();
        expect(await loginPage.errorMessage.isVisible()).toBeTruthy();
        expect(await loginPage.getErrorMessage()).toBe("Password is required");
    });

    test("should see the password by clicking on show icon @showicon", async ({ page }) => {
        await loginPage.clickShowPassword();
        expect(await loginPage.getPasswordVisibility()).toBe("visibility");
    });

    test("should login with valid credentials successfully and logout", async ({ page }) => {
        const usernameValue = "sau12345";
        const validPasswordValue = "Sau@12345";

        await loginPage.login(usernameValue, validPasswordValue);
        await page.waitForTimeout(200);
        await expect(page).toHaveTitle("Home");
        await page.waitForLoadState("load");
        await page.waitForTimeout(200);
        
        const loggedInUsername = await loginPage.getLoggedInUsername();
        expect(loggedInUsername?.trim()).toBe("sau12345");

        await loginPage.logout();
        await expect(page).toHaveTitle("Login");
    });
});
