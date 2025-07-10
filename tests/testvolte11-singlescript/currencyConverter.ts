import { Page } from '@playwright/test';
import { time } from 'console';

export async function testCurrencyConversion(page: Page, profile: {
  region: string;
  fromCurrency: string;
  toCurrency: string;
  amount: string;
}) {
  await page.goto('https://www.xe.com/currencyconverter/');
  await page.locator('#amount').clear();
  await page.locator('#amount').click();
  await page.fill('#amount', profile.amount);
  await page.getByRole('textbox', { name: 'Amount' }).press('Enter');
  await page.waitForTimeout(200);

  const fromCurrencyLocator = page.locator('#midmarketFromCurrency').getByRole('combobox', { name: 'Type to search...' });
  await fromCurrencyLocator.click();
  await page.waitForTimeout(400);
  await fromCurrencyLocator.fill(profile.fromCurrency);
  await page.waitForTimeout(400);
  await fromCurrencyLocator.press('Enter'); 
  // await page.locator('#midmarketFromCurrency').getByRole('combobox', { name: 'Type to search...' }).
  // await page.locator('#midmarketFromCurrency').getByRole('combobox', { name: 'Type to search...' }).click();
  // await page.locator('#midmarketFromCurrency').getByRole('combobox', { name: 'Type to search...' }).fill(profile.fromCurrency);
  await page.waitForTimeout(200);


  const toCurrencyLocator = page.locator('#midmarketToCurrency').getByRole('combobox', { name: 'Type to search...' });
  await page.waitForTimeout(400);
  await toCurrencyLocator.click();
  await page.waitForTimeout(400);
  await toCurrencyLocator.fill(profile.toCurrency);
  await page.waitForTimeout(400);
  await toCurrencyLocator.press('Enter'); // Select the currency from the dropdown
  await page.waitForTimeout(400);

  await page.getByRole('button', { name: 'Convert' }).click();

  // await page.waitForSelector('.sc-56d5cf17-1.ifKLEd', { timeout: 2000 });
  const int1 = await page.textContent('.sc-56d5cf17-1.ifKLEd');
  const int2 = await page.textContent('.faded-digits');
  const result = `${int1} ${int2}`.trim();
  console.log(`============ Conversion result for ${profile.region}:=> ${result}`);
}
