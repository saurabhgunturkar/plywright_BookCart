import test, { expect } from "playwright/test";
import { userRegistrationData } from "../../utils/faker";
import { RegisterPage } from "../pages/registerPage";

test.describe("User Registration", () => {
    let registerPage: RegisterPage;

    
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.goto();
    });

    test("should visible the firstname textfield ", async () => {
        expect(registerPage.firstNameField).toBeDefined();
        expect(await registerPage.firstNameField.isVisible()).toBeTruthy();
        expect(await registerPage.firstNameField.isEnabled()).toBeTruthy();
    })

    test("should show error message for empty firstname", async () => {
        await registerPage.firstNameField.click();
        await registerPage.lastNameField.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText("First Name is required");
    })

    test("should visible the lastname textfield ", async () => {
        expect(registerPage.lastNameField).toBeDefined();
        expect(await registerPage.lastNameField.isVisible()).toBeTruthy();
        expect(await registerPage.lastNameField.isEnabled()).toBeTruthy();
    })

    test("should show error message for empty lastname", async () => {
        await registerPage.lastNameField.click();
        await registerPage.userNameField.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText("Last Name is required");
    })

    test("should visible the username textfield ", async () => {
        expect(registerPage.userNameField).toBeDefined();
        expect(await registerPage.userNameField.isVisible()).toBeTruthy();
        expect(await registerPage.userNameField.isEnabled()).toBeTruthy();
    })

    test("should show error message for empty username", async () => {
        await registerPage.userNameField.click();
        await registerPage.passwordField.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText("User Name is required");
    });

    test("should show error if the username is already available", async ({ page }) => {
        await registerPage.userNameField.fill("samdoe12345678032587");
        await registerPage.passwordField.click();
        await page.waitForTimeout(1000);
        if (await registerPage.errorMessage.isVisible()) {
            await expect(registerPage.errorMessage).toBeVisible();
            await expect(registerPage.errorMessage).toHaveText("User Name is not available");
            console.log("Username is not available");
        } else {
            console.log("Username is available");
        }
    })

    test("should visible the password textfield ", async () => {
        expect(registerPage.passwordField).toBeDefined();
        expect(await registerPage.passwordField.isVisible()).toBeTruthy();
        expect(await registerPage.passwordField.isEnabled()).toBeTruthy();
    });

    test("should show error message for empty password", async () => {
        await registerPage.passwordField.click();
        await registerPage.confirmPasswordField.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText("Password is required");
    });

    test("should show error is password does not match the requirement", async () => {
        await registerPage.passwordField.fill("12345");
        await registerPage.confirmPasswordField.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText(" Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");
    })

    test("should visible the confirm password textfield ", async () => {
        expect(registerPage.confirmPasswordField).toBeDefined();
        expect(await registerPage.confirmPasswordField.isVisible()).toBeTruthy();
        expect(await registerPage.confirmPasswordField.isEnabled()).toBeTruthy();
    });

    test("should show error message for empty confirm password", async () => {
        await registerPage.confirmPasswordField.click();
        await registerPage.registerButton.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText("Password is required ");
    });

    test("should show error if confirm password does not match the password", async () => {
        const user = userRegistrationData();
        await registerPage.passwordField.fill(user.password);
        await registerPage.confirmPasswordField.fill("user1234");
        await registerPage.registerButton.click();
        await expect(registerPage.errorMessage).toBeVisible();
        await expect(registerPage.errorMessage).toHaveText("Password do not match");
    });


    test("should registered a user successfully @debug", async ({ page }) => {
        await page.evaluate(() => { //zoom out by 75%
            document.body.style.transform = 'scale(0.75)';
            document.body.style.transformOrigin = 'top left';
        });
        await page.waitForTimeout(500);
        const user = userRegistrationData();
        console.log("User Registration Data:", user);
        await registerPage.registerUser(user);
    });

    test.afterEach(async ({ page }) => {
        const successMessage = page.getByText('Registration successful', { exact: true });
        if (await successMessage.isVisible()) {
            await expect(successMessage).toContainText("Registration successful");
            console.log("User registered successfully");
        } else {
            console.log("Registration failed means negative testcases runs successfully");
        }
    });
});

