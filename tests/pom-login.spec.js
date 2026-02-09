import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage";
test("Login successfully using POM", async ({ page }) => {
  // Khởi tạo các Page Object
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  // Kịch bản test (Flow)
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  // Kiểm tra kết quả
  await inventoryPage.verifyPageTitle("Products");
});
