import { test, expect } from '@playwright/test'

test('should display welcome message', async ({ page }) => {
  await page.goto('/')
  // Simple check for existence of some element in the default Angular app
  await expect(page.locator('h1')).toBeVisible()
})