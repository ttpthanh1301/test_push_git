class RegisterPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.email = page.locator("#user-email");
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.phoneNumber = page.locator("#phone-number");
    this.registerButton = page.locator('button[name="register"]');
    this.erroredMessage = page.locator('[data-test="error"]');
  }
  async fillForm(username, password, email, firstName, lastName, phoneNumber) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.email.fill(email);
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.phoneNumber.fill(phoneNumber);
  }
  clickRegister() {
    this.registerButton.click();
  }
  displayErrorMessage() {
    expect(this.erroredMessage).toBeVisible();
  }
}
