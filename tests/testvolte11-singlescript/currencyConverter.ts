import { Page } from '@playwright/test';

export async function testCurrencyConversion(page: Page, profile: {
  region: string;
  fromCurrency: string;
  toCurrency: string;
  amount: string;
}) {
  await page.goto('https://www.xe.com/currencyconverter/');

  await page.fill('input[name="Amount"]', profile.amount);
  await page.fill('input[name="From"]', profile.fromCurrency);
  await page.fill('input[name="To"]', profile.toCurrency);

  await page.click('button[type="submit"]');
  await page.waitForSelector('.result__BigRate-sc-1bsijpp-1');

  const result = await page.textContent('.result__BigRate-sc-1bsijpp-1');
  console.log(`Conversion result for ${profile.region}: ${result}`);
}
