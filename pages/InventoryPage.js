const { expect } = require("@playwright/test");
exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.pageTitle = page.locator(".title");
    this.menuButton = page.locator("#react-burger-menu-btn");
    this.logoutLink = page.locator("#logout_sidebar_link");
    this.cartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
  } // Actions & Verifications
  async verifyPageTitle(title) {
    await expect(this.pageTitle).toHaveText(title);
  }
  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
  async addToCart() {
    await this.cartButton.click();
  }
};
