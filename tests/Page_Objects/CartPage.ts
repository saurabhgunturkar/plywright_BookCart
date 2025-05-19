import { Locator, Page } from "playwright";


export class CartPage{

    private CheckoutBtn: Locator;

    constructor(page:Page){
        this.CheckoutBtn = page.getByRole('button',{name:"Checkout"});
    }

    async clickOnCheckoutButton(){
        await this.CheckoutBtn.click();
    }
}