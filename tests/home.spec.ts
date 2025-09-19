import { test, expect } from '@playwright/test';

test('home has H1 visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText(/ARCHONIUM/i);
});
