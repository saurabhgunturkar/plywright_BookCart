import test from "playwright/test";

test.describe('signup module', async()=>{
    test.beforeEach(async({page})=>{
        await page.goto("/")
    })

    test('test11',async({page})=>{
        console.log("signup test 1")
    })

    test('test2',async({page})=>{
        console.log("signup test 2")
    })
})