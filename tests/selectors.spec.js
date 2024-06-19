import { test, expect } from '@playwright/test';
 test('Selectors Demo', async({page}) => {
   await page.goto('https://www.saucedemo.com/')
   await page.pause()
   await page.click('id=user-name')
   await page.locator('id=user-name').fill('Edison')
   await page.locator('[id="user-name"]').fill('Einstein')
   await page.pause()
   //use css selector 
   await page.locator('#login-button').click()
   await page.pause()
   //using xpath
   await page.locator('xpath=//input[@name="login-button"])').click()
   await page.locator('//input[@name="login-button"]').click()
   //using text
   await page.locator('text=LOGIN').click()
   await page.locator(':has-text("LOGIN")').click()
   
 });