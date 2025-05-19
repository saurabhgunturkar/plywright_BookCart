import { Locator, Page } from "playwright";


export class MyOrderDetailsPage{

    private orderRow: Locator;
    private orderId:Locator;
    private orderDate: Locator;
    private orderTotal: Locator;
    private orderedTitle : Locator;
    private orderQty: Locator;
    private paidAmount: Locator;
    

    constructor(page: Page){
        const orderRow = page.locator('//tbody[@class="mdc-data-table__content ng-star-inserted"]');
        const orderId = page.locator('//td[@class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-orderId mat-column-orderId ng-tns-c259219554-29 ng-star-inserted"]');
        const orderDate = page.locator('//td[@class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-orderDate mat-column-orderDate ng-tns-c259219554-29 ng-star-inserted"]');
        const orderTotal = page.locator('//td[@class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-cartTotal mat-column-cartTotal ng-tns-c259219554-29 ng-star-inserted"]');
        const orderedTitle = page.locator('//td/a[@class="ng-tns-c259219554-29"]');
        const orderQty = page.locator('//tr/td[@class="ng-tns-c259219554-29"]').nth(2);
        const paidAmount = page.locator('//tr/td[@class="ng-tns-c259219554-29"]').nth(3);

    }

    async clickOnOrderRow(){
        await this.orderRow.click();
    }
    async getOrderDetails(){
        
    }

}