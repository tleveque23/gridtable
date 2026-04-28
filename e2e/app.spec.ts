import { test, expect } from '@playwright/test'

test('should render the grid table with correct data', async ({ page }) => {
  await page.goto('/')
  
  // Wait for the grid table to be visible
  const grid = page.locator('.grid-table')
  await expect(grid).toBeVisible()

  // Check headers
  const headers = page.locator('.grid-table-header')
  await expect(headers).toHaveCount(4)
  await expect(headers.nth(0)).toContainText('Name')
  await expect(headers.nth(1)).toContainText('First Name')
  await expect(headers.nth(2)).toContainText('Age')
  await expect(headers.nth(3)).toContainText('') // Last column has no header in user example

  // Check row data
  const cells = page.locator('.grid-table-cell')
  // For the first row of data
  await expect(cells.nth(0)).toContainText('Doe')
  await expect(cells.nth(1)).toContainText('John')
  await expect(cells.nth(2)).toContainText('30')
  await expect(cells.nth(3).locator('button')).toContainText('Delete')
})