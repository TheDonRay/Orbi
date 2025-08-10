import { test, expect, describe } from '@playwright/test';

describe('Learning about writing tests in playwright', () => {

  // This hook runs before each test to navigate to the correct URL.
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  // Test 1: Verifies the homepage's title.
  test('going to test if the website has the title', async ({ page }) => {
    await expect(page).toHaveTitle(/O R B I/i); 
    await expect(page).toHaveURL('http://localhost:3000/');  

    await page.close(); // this will close the page 
  });
});