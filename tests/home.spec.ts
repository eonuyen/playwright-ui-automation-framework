import { test, expect } from '@playwright/test';

test('Insider home page should open and main blocks should be visible', async ({ page }) => {
  await page.goto('https://insiderone.com/');

  await expect(page).toHaveURL(/insiderone\.com/);

  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('body')).toContainText(/Insider/i);
  await expect(page.locator('footer')).toBeVisible();
});
