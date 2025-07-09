import { defineConfig, devices } from "playwright/test";

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://bookcart.azurewebsites.net/';

export default defineConfig({
  testDir: './tests/BookCartApp/tests',
  fullyParallel: true,
  globalTeardown:'./tests/Utils/global-teardown.ts',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html']],
  use: {
    screenshot:"only-on-failure",
    baseURL,
    trace: 'on-first-retry',
    headless: false
  },

  projects: [
    
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      channel:'chrome',
      
      }
    },
    
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox']},
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari']},
    // },
    // {
    //   name: 'Iphone 14',
    //   use: { ...devices['iPhone 14']},
    // },
    // // {
    // //   name: 'Mobile Firefox',
    // //   use: { ...devices['Pixel 5']},
    // // },
    // // {
    // //   name: 'Mobile Chrome',
    // //   use: { ...devices['Pixel 5']},
    // // },
    // // {
    // //   name: 'Mobile Chrome',
    // //   use: { ...devices['Pixel 5'] },
    // // },
    // {
    //   name: 'Iphone 15 pro max',
    //   use: { ...devices['iPhone 15 Pro Max'] },
    // },
    // {
    //   name:'Ipad 11 pro',
    //   use: {...devices['iPad Pro 11']}
    // }
    


  ],


});
