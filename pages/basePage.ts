import { Page, Locator, expect } from "@playwright/test";

class BasePage {
  readonly page: Page;
  readonly errorToast: Locator;
  readonly addtoCart: Locator;
  readonly backToAddChartButton: Locator;
  readonly backToProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorToast = page.locator('[data-test="error"]');
    this.addtoCart = page.getByRole("button", { name: "Remove" });
    this.backToAddChartButton = page.getByRole("button", {
      name: "Add to cart",
    });
    this.backToProduct = page.getByRole("button", { name: "Back to products" });
  }

  async goto(path = "https://www.saucedemo.com/") {
    await this.page.goto(path);
  }

  async errorMessage() {
    await expect(this.errorToast).toBeVisible();
  }

  async verifclickAddtoChartButton() {
    await expect(this.addtoCart.first()).toBeVisible();
  }

  async verifyRemoveButton() {
    await expect(this.backToAddChartButton.first()).toBeVisible();
  }
  async backToProductItem() {
    await expect(this.backToProduct).toBeVisible();
  }
}

export default BasePage;
