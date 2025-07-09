import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly showPasswordIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder("Username");
        this.passwordField = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole("button", { name: "Login" }).last();
        this.errorMessage = page.locator("mat-error");
        this.showPasswordIcon = page.getByText('visibility_off');
    }

    async goto() {
        await this.page.goto("/login");
    }

    async login(username: string, password_val: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password_val);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string | null> {
        return await this.errorMessage.textContent();
    }

    async clickShowPassword() {
        await this.showPasswordIcon.click();
    }

    async getPasswordVisibility(): Promise<string | null> {
        return await this.page.getByText('visibility').textContent();
    }

    async getLoggedInUsername(): Promise<string | null> {
        const loginSuccessElement = this.page.locator('//span[@class="mdc-button__label"]/span').first();
        return await loginSuccessElement.textContent();
    }

    async logout() {
        const loginSuccessElement = this.page.locator('//span[@class="mdc-button__label"]/span').first();
        await loginSuccessElement.click();
        await this.page.getByText("Logout").click();
    }
}
