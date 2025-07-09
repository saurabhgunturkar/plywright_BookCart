# plywright_bookcart

A selfmade testing project

## Dependencies

### Production
- @azure/microsoft-playwright-testing: ^1.0.0-beta.7
- dotenv: ^17.0.1
- protractor: ^3.3.0

### Development
- @cucumber/cucumber: ^11.3.0
- @cucumber/pretty-formatter: ^1.0.1
- @playwright/test: ^1.52.0
- @types/node: ^22.13.4
- playwright: ^1.52.0
- ts-node: ^10.9.2
- typescript: ^5.8.3

## Scripts

- `npm run runtest`: Executes Playwright tests.
- `npm run test:ED`: Runs a specific test file (`Testcases/ExampleDomain.spec.ts`) in headed mode using the Chromium browser.
- `npm run showreport`: Displays the Playwright test report.
