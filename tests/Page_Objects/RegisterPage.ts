import { Locator, Page } from "playwright";


export class RegisterPage{

    private firstnameTextField:Locator;
    private lastnameTextField:Locator;
    private usernameTextField:Locator;
    private passwordTextField:Locator;
    private confirmPasswordTextField:Locator;
    private maleRadioBtn:Locator;
    private femaleRadioBtn:Locator;
    private registerBtn:Locator;

    constructor(page:Page){
        this.firstnameTextField = page.getByPlaceholder('First Name');
        this.lastnameTextField = page.getByPlaceholder('Last Name');
        this.usernameTextField = page.getByPlaceholder('User name');
        this.passwordTextField = page.locator('input[type="password"]').first();
        this.confirmPasswordTextField = page.locator('input[placeholder="Confirm Password"]');
        this.maleRadioBtn = page.locator('input[value="Male"]');
        this.femaleRadioBtn = page.locator('label:has-text("Female")');
        this.registerBtn = page.locator('//span[text()="Register"]');


    }

    async enterFirstName(firstname: string){
        await this.firstnameTextField.fill(firstname);
    }
    async enterLastName(lastname: string){
        await this.lastnameTextField.fill(lastname);
    }
    async enterUsername(username: string){
        await this.usernameTextField.fill(username);
    }
    async enterPassword(password: string){
        await this.passwordTextField.fill(password);
    }
    async enterConfirmPassword(password: string){
        await this.confirmPasswordTextField.fill(password);
    }
    async clickMaleRadioBtn(){
        await this.maleRadioBtn.click();
    }
    async clickFemaleRadioBtn(){
        await this.femaleRadioBtn.click();
    }
    async clickRegisterButton() {
        // Check if the button is enabled before clicking
        const isEnabled = await this.registerBtn.isEnabled();
        if (!isEnabled) {
            throw new Error("Register button is not enabled and cannot be clicked.");
        }
    
        // Click the register button
        await this.registerBtn.click();
    
        // Optionally, you can add further assertions here to verify the result of the click
        console.log("Register button was clicked successfully.");
    }

    async selectGender(gender:string){
        if(gender.toLowerCase()=='male'){
            await this.clickMaleRadioBtn();
        }
        else if (gender.toLowerCase()=='female'){
            await this.clickFemaleRadioBtn();
        }
        else{
            console.log('Invalid Gender');
        }
    }




}