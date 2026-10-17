import BasePage from "./basePage";
import { Page, Locator } from "@playwright/test";

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.emailInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(user: string, password: string) {
    await this.emailInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
