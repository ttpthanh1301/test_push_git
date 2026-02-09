import { test, expect } from "@playwright/test";
test.describe("Demo Reporting", () => {
  // Case 1: Chạy đúng
  test("Login Success", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/.*inventory/);
  });
  // Case 2: Cố tình sai để lấy Screenshot & Video
  test("Login Fail - Wrong Password", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("wrong_pass");
    // Sai pass
    await page.locator('[data-test="login-button"]').click();
    // Cố tình verify sai: Mong đợi vào được trang inventory
    await expect(page).toHaveURL(/.*inventory/);
  });
});
