import { Locator, Page } from "playwright";


export class LoginPage{
    private registerBtn: Locator;
    private loginBtn: Locator;
    private usernameTextField: Locator;
    private passwordTextField: Locator;

    constructor(page:Page){
        this.registerBtn = page.getByRole('button', { name: 'Register' });
        this.usernameTextField = page.locator('input[placeholder="Username"]');
        this.passwordTextField = page.getByPlaceholder('Password');
        this.loginBtn = page.locator('mat-card-content button[color="primary"]');
    }

    async clickRegisterButton(){
        await this.registerBtn.click();
    }

    async enterUsername(username: string){
        await this.usernameTextField.fill(username);
    }

    async enterPassword(password: string){
        await this.passwordTextField.fill(password);
    }

    async clickLoginButton(){
        await this.loginBtn.click();
    }



}