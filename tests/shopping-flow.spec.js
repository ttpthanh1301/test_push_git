import { test, expect } from "./fixtures/pomFixtures";
test.describe("Shopping Flow with Fixtures", () => {
  test.beforeEach(
    "Login successfully",
    async ({ loginPage, inventoryPage }) => {
      await loginPage.goto();
      await loginPage.login("standard_user", "secret_sauce");
      // Kiểm tra kết quả
      await inventoryPage.verifyPageTitle("Products");
    },
  );
  test("vao gio hang- check out- fillin - finish", async ({
    cartPage,
    checkoutPage,
  }) => {
    await cartPage.gotoCart();
    await cartPage.clickCheckout();
    await checkoutPage.fillInformation("John", "Doe", "12345");
    await checkoutPage.clickContinue();
    await checkoutPage.verifyPageTitle("Checkout: Overview");
    await checkoutPage.clickFinish();
    await checkoutPage.verifyPageTitle("Checkout: Complete!");
  });
});
