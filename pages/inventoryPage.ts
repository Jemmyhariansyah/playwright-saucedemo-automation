import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./basePage";

export class InventoryPage extends BasePage {
  readonly appLogo: Locator;
  readonly title: Locator;
  readonly iconPaymen: Locator;

  constructor(page: Page) {
    super(page);
    this.appLogo = page.getByText("Swag Labs");
    this.title = page.locator('[data-test ="title"]');
    this.iconPaymen = page.locator('[data-test = "shopping-cart-link"]');
  }

  async goto() {
    await this.page.goto("/inventory.html");
  }
  async verifyUserOnInventoryPage() {
    await expect(this.appLogo).toHaveText("Swag Labs");
  }

  async verifyUserHaveTitle() {
    await expect(this.title).toHaveText("Products");
  }
}
