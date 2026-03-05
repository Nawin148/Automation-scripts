import { test, expect } from '@playwright/test';

test('ParaBank Home Page Automation', async ({ page }) => {
  // 1️⃣ Navigate to ParaBank Home Page
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' })

  // 2️⃣ Fill login form
  await page.locator('input[name="username"]').fill('john'); // username
  await page.locator('input[name="password"]').fill('demo'); // password
  waitUntil:'networkidle'

  // 3️⃣ Click Login
  await page.locator('input[class="button"]').click();

  // 4️⃣ Verify successful login by checking page title or URL
  await expect(page).toHaveURL(/overview\.htm/);
  await page.waitForSelector('#leftPanel');
  // 5️⃣ Interact with left menu items (after login)
 await page.getByRole('link', { name: 'Accounts Overview' }).click();
 await page.getByRole('link', { name: 'Transfer Funds' }).click();
 await page.getByRole('link', { name: 'Bill Pay' }).click();

  // 6️⃣ Interact with top menu
  await page.locator('#headerPanel li a:has-text("About Us")').click();
  await page.locator('#headerPanel li a:has-text("Contact")').click();

  // 7️⃣ Interact with footer links
  await page.locator('#footerPanel a:has-text("Home")').click();
  await page.locator('#footerPanel a:has-text("Contact Us")').click();

  // 8️⃣ Logout (optional)
  await page.locator('a[href="logout.htm"]').click();

  // 9️⃣ Verify logout by checking Home page
  await expect(page).toHaveURL(/index\.htm/);
});