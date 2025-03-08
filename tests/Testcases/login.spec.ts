import test from "playwright/test";

test.describe('login module', async()=>{
    test.beforeEach(async({page})=>{
        await page.goto("/")
    })

    test('test1',async({page})=>{
        console.log("signup test")
    })

    test('test2',async({page})=>{
        console.log("signup test")
    })
})