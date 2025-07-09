import { Locator, Page } from "@playwright/test";

export class RegisterPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly maleGenderRadioButton: Locator;
    readonly femaleGenderRadioButton: Locator;
    readonly registerButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.getByPlaceholder('First name');
        this.lastNameField = page.getByPlaceholder('Last name');
        this.userNameField = page.getByPlaceholder('User name');
        this.passwordField = page.locator('input[type="password"]').first();
        this.confirmPasswordField = page.locator('input[placeholder="Confirm Password"]');
        this.maleGenderRadioButton = page.locator('input[value="Male"]');
        this.femaleGenderRadioButton = page.locator('label:has-text("Female")');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.errorMessage = page.locator('mat-error');
    }

    async goto() {
        await this.page.goto("/register");
        await this.page.waitForLoadState("load");
    }

    async registerUser(user: any) {
        await this.firstNameField.fill(user.firstName);
        await this.page.waitForTimeout(200);
        await this.lastNameField.fill(user.lastname);
        await this.page.waitForTimeout(200);
        await this.userNameField.fill(user.username);
        await this.page.waitForTimeout(200);
        await this.passwordField.fill(user.password);
        await this.page.waitForTimeout(200);
        await this.confirmPasswordField.fill(user.confirmpassword);
        await this.page.waitForTimeout(200);
        if (user.gender.toLowerCase() === 'male') {
            await this.maleGenderRadioButton.click();
        } else if (user.gender.toLowerCase() === 'female') {
            await this.femaleGenderRadioButton.click();
        }
        await this.page.waitForTimeout(300);
        await this.registerButton.click();
        console.log("Register button clicked");
        // await this.registerButton.click();
        await this.page.waitForTimeout(200);
        await this.page.waitForURL('**/login');
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}
