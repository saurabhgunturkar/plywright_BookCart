import { defineConfig, devices } from "playwright/test";

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://bookcart.azurewebsites.ne/';

export default defineConfig({
  testDir: './tests/test',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  globalTeardown:'./tests/Utils/global-teardown.ts',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['list'], ['html']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot:"only-on-failure",
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'https://bookcart.azurewebsites.net/',
    baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox']},
    },


  ],


});
