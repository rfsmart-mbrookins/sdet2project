

import { test, expect } from '@playwright/test';

// This should not be in a configuration file or imported by it
test('My first test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});