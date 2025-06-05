import { Locator, Page } from "playwright/test";

export class HomepPage{

    private page: Page;
    private loginBtn: Locator;
    private searchBar: Locator;
    private searchedProduct: Locator;
    private searchedProductCart: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.searchBar = page.locator('input[type="search"]');
        this.searchedProductCart = page.getByAltText('Book cover image');
        
    }

    async clickLoginButton(){
        await this.loginBtn.click();
    }

    async clickOnSearchBox(){
        await this.searchBar.click();
    }
    async enterProductName(productName: string){
        await this.searchBar.fill(productName);
    }
    async clickOnSearchedProductListItem(productName: string) {
        const productlistitem = await this.page.locator(`//span[text()='${productName}']`).click();
    }
    async clickOnSearchedProductCart(){
        await this.searchedProductCart.click();
    }





}