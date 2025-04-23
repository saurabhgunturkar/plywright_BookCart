import { BrowserContext, Page } from "playwright/test";


export class Helper {  

    private page:Page;

    

    static async openNewWindow(context: BrowserContext, page: Page, selector: string): Promise<Page> {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'), // Wait for a new page to open
            page.locator(selector).click(), // Click the button to open the new window
        ]);
        await newPage.waitForLoadState('domcontentloaded'); // Wait for the new page to load
        return newPage;
    }

    static async fileUploader(page:Page, selector: string, path:string){
        await page.setInputFiles(selector, path);
    }

}