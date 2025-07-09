import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://bookcart.azurewebsites.net/';

export default defineConfig({
  testDir: './tests/BookCartApp/tests',
  fullyParallel: true,
  globalTeardown: './tests/Utils/global-teardown.ts',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html']],
  use: {
    screenshot: 'only-on-failure',
    baseURL,
    trace: 'on-first-retry',
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    // Uncomment the following projects as needed
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //   name: 'iPhone 14',
    //   use: { ...devices['iPhone 14'] },
    // },
    // {
    //   name: 'iPhone 15 Pro Max',
    //   use: { ...devices['iPhone 15 Pro Max'] },
    // },
    // {
    //   name: 'iPad Pro 11',
    //   use: { ...devices['iPad Pro 11'] },
    // },
  ],
});
