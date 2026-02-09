const { expect } = require("@playwright/test");
exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.postalCode = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.title = page.locator(".title");
  }
  async fillInformation(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }
  async clickContinue() {
    await this.continueButton.click();
  }
  // veryfication
  async verifyPageTitle(title) {
    await expect(this.title).toHaveText(title);
  }
  async clickFinish() {
    await this.finishButton.click();
  }
};
