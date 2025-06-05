import { Locator, Page } from "playwright";


export class CheckoutPage{

    private customernName: Locator;
    private addressLine1: Locator;
    private addressLine2: Locator;
    private pincode: Locator;
    private state: Locator;
    private placeOrderBtn: Locator;

    constructor(page:Page){
        this.customernName = page.getByPlaceholder('Name');
        this.addressLine1 = page.getByPlaceholder('Address Line 1');
        this.addressLine2 = page.getByPlaceholder('Address Line 2');
        this.pincode = page.getByPlaceholder('Pincode');
        this.state = page.getByPlaceholder('State');
        this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' });

    }

    async enterCustomerName(name: string){
        await this.customernName.fill(name);
    }
    async enterAddressLine1(address: string){
        await this.addressLine1.fill(address);
    }
    async enterAddressLine2(address: string){
        await this.addressLine2.fill(address);
    }
    async enterPincode(pincode: string){
        await this.pincode.fill(pincode);
    }
    async enterState(state: string){
        await this.state.fill(state);
    }
    async clickOnPlaceOrderButton(){
        await this.placeOrderBtn.click();
    }



}