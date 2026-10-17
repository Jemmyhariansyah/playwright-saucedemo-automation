import { Page, Locator, expect } from "@playwright/test";

class BasePage {
  readonly page: Page;
  readonly errorToast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorToast = page.locator('[data-test="error"]');
  }

  async goto(path = "/") {
    await this.page.goto(path);
  }

  async errorMessage() {
    await expect(this.errorToast).toBeVisible();
  }
}

export default BasePage;
