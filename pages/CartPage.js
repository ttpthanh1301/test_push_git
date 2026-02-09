const { expect } = require("@playwright/test");
exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    // 1. Định nghĩa Locators(Biến)
      this.cartButtonRemove = page.locator('[data-test="remove-sauce-labs-backpack"]');
      this.checkoutButton = page.locator('[data-test="checkout"]');
      this.cartButton = page.locator('[data-test="shopping-cart-link"]');

  }
  async clickCheckout() {
    await this.checkoutButton.click();
  }
    async gotoCart() {
        await this.cartButton.click();
    }
  async getItemCount() {
    return await this.cartItems.count();
  }

  async getItemNames() {
    return await this.cartItems
      .locator(".inventory_item_name")
      .allTextContents();
  }
};
