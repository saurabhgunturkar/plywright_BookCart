import test from "@playwright/test";

import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomepPage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SearchedProductPage } from "../pages/SearchedProductPage";


test.describe("E2E Test Suite", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        
    });

    test("E2E Test", async ({ page }) => {
        const homepage = new HomepPage(page);
        const loginpage = new LoginPage(page);
        const registerpage = new RegisterPage(page);
        const searchedproductpage = new SearchedProductPage(page);
        const cartpage = new CartPage(page);
        const checkoutpage = new CheckoutPage(page);

        // await test.step("User registers an account", async () => {
        //     await homepage.clickLoginButton();
        //     await loginpage.clickRegisterButton();
        //     await registerpage.enterFirstName('Sam');
        //     await registerpage.enterLastName('Doe');
        //     await page.waitForTimeout(100);
        //     await registerpage.enterUsername('samdoe12345678'); //change username everytime..
        //     await page.waitForTimeout(100);
        //     await registerpage.enterPassword('Samdeo@123');
        //     await page.waitForTimeout(100);
        //     await registerpage.enterConfirmPassword('Samdeo@123');
        //     await registerpage.selectGender('Male');
        //     await page.waitForTimeout(200);
        //     await registerpage.clickRegisterButton();
        //     await page.waitForTimeout(200);
        //     console.log("New page title", await page.title());
        //     await page.screenshot({ path: 'screenshots/SuccessRegistration.png' });
        //     await page.waitForTimeout(200);
        // });


        await test.step("User logs into the account", async () => {
            await page.goto('/login');
            await loginpage.enterUsername("sau12345");
            await loginpage.enterPassword("Sau@12345");
            await loginpage.clickLoginButton();
            await page.waitForTimeout(200);
            const loginSuccessElement = page.locator('//span[@class="mdc-button__label"]/span').first();
            await loginSuccessElement.waitFor({ timeout: 5000 });
            await page.screenshot({ path: "screenshots/SuccessLogin.png" });
        });

        await test.step("Search for the book -> Rot & Ruin", async () => {
            await page.goto("/");
            await page.waitForTimeout(100);
            await homepage.clickOnSearchBox();
            await homepage.enterProductName("Rot & Ruin");
            await homepage.clickOnSearchedProductListItem(" Rot & Ruin ");
            await page.screenshot({path: "screenshots/SearchedProductItem.png"});
            
        });

        await test.step("Go to product page, Verify the details and add to cart", async () => {
            await homepage.clickOnSearchedProductCart();
          await searchedproductpage.verifyTheDetails(
            "Rot & Ruin",
            "Jonathan Maberry",
            "Biography",
            "₹123.00"
          );
          await page.screenshot({ path: "screenshots/searchedProductPage.png" });
          await searchedproductpage.clickOnAddToCartButton();  
        });

        await test.step("Go to the Cart and proceed to Checkout", async () => {
            await searchedproductpage.gotoThecartPage();
            await page.waitForTimeout(100);
            await page.screenshot({ path: "screenshots/CartPage.png" });
            await cartpage.clickOnCheckoutButton();
            
        });

        await test.step("fill the details and place the order", async () => {
            await page.goto('/checkout');
            await checkoutpage.enterCustomerName('Sauarbh G1');
            await checkoutpage.enterAddressLine1('1234, 5th Avenue');
            await checkoutpage.enterAddressLine2('Misom Street, Pune');
            await checkoutpage.enterPincode('123456');
            await checkoutpage.enterState('Maharashtra');
            await page.screenshot({ path: "screenshots/CheckoutPage.png" });
            await checkoutpage.clickOnPlaceOrderButton();
            await page.waitForTimeout(200);
            
        });

        await test.step('Placed order detalis', async()=>{
            await page.screenshot({path:'screenshots/MyOrderDetails.png'});
            await page.waitForTimeout(200);
        });


        // await test.step("Logout the account", async () => {
        //   // Implement logout functionality here
        // });
    });


});


