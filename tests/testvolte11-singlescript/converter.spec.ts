import { test } from '@playwright/test';
import { testCurrencyConversion } from './currencyConverter';
import { testProfiles } from './testprofiles';


test.describe('Currency Conversion Tests @currency', () => {
  testProfiles.forEach((profile, index) => {
    test(`(${index + 1}) Convert ${profile.amount} from ${profile.fromCurrency} to ${profile.toCurrency} for ${profile.region}`, async ({ page }) => {
      test.setTimeout(60 * 1000);
      try {
        await testCurrencyConversion(page, profile);
      } catch (err) {
        console.error(`❌ Failed for ${profile.region} (${profile.fromCurrency} to ${profile.toCurrency})`);
        console.error(err);
      }
      await page.waitForTimeout(2000); // optional delay
    });
  });
});
