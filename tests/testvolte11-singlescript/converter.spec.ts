import { test } from '@playwright/test';
import { testCurrencyConversion } from './currencyConverter';
import { testProfiles } from './testprofiles';


test.describe('Currency Conversion Tests @currency', () => {
  for (const profile of testProfiles) {
    test(`Convert ${profile.amount} from ${profile.fromCurrency} to ${profile.toCurrency} for ${profile.region}`, async ({ page }) => {
      await testCurrencyConversion(page, profile);
    });
  }
});
