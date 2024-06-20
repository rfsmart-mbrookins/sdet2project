import { test, expect } from '@playwright/test';
 test.only('Demo Login Test 1', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav')
    await page.locator('[placeholder="Enter your password"]').fill('Password1')
    await page.locator('button:has-text("Sign in")').click()
    await page.locator('text=ACME').isVisible()
 });

 test('Demo Login Test 2', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
    // await page.pause()
    await page.locator('[placeholder="Username"]').click()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Username"]').press('Tab')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    // await page.locator('p:has-text("Test 22 LastName")').click()
    await page.locator('text=Logout').click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 });

 
