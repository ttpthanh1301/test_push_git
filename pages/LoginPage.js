import { test, expect } from "@playwright/test";
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    // 1. Định nghĩa Locators(Biến)
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  getErrorMessage() {
    return this.errorMessage;
  }
};

