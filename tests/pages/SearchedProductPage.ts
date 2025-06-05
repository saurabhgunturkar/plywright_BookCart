import { Locator, Page } from "playwright";
import { expect } from "playwright/test";


export class SearchedProductPage{

    private titleValue: Locator;
    private authorValue: Locator;
    private categoryValue: Locator;
    private priceValue: Locator;
    private addToCartBtn: Locator;
    private cartIcon: Locator;
    private page:Page;

    constructor(page: Page){
        this.addToCartBtn = page.locator('mat-card').filter({ hasText: 'Book DetailsTitleRot &' }).getByRole('button').first();
        this.cartIcon = page.locator('//mat-icon[@class="mat-icon notranslate mat-badge mat-badge-warn material-icons mat-ligature-font mat-icon-no-color mat-badge-overlap mat-badge-above mat-badge-after mat-badge-medium"]').last();
        this.page=page;
    }

    async verifyTheDetails(title: string, author: string, category: string, price: string){
           await expect(await this.page.getByRole('cell', { name: `${title}` })).toHaveText(title);
             await expect(await this.page.getByRole('cell', { name: `${author}` })).toHaveText(author);
               await expect(await this.page.getByRole('cell', { name: `${category}` })).toHaveText(category);
                   await expect(await this.page.getByRole('cell', { name: '₹' })).toHaveText(price);
    }

    async clickOnAddToCartButton(){
        await this.addToCartBtn.click();
    }

    async gotoThecartPage(){
        await this.cartIcon.click();
    }


}