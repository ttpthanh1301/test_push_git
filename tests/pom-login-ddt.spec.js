import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage";
import dataset from "../test-data/users.json";
// Import cục data
test.describe("Login Data Driven with POM", () => {
  for (const data of dataset) {
    test(`Test User: ${data.username} - Type: ${data.desc}`, async ({
      page,
    }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      await loginPage.goto();
      await loginPage.login(data.username, data.password);
      if (data.desc === "Login thành công") {
        await inventoryPage.verifyPageTitle(data.expectedMessage);
      } else {
        // Với case lỗi, ta check ngay trên LoginPage
        await expect(loginPage.errorMessage).toContainText(
          data.expectedMessage,
        );
      }
    });
  }
});
