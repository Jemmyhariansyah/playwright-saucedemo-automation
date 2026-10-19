import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./basePage";

export class InventoryPage extends BasePage {
  // readonly logo: Locator;
  readonly appLogo: Locator;
  readonly title: Locator;
  readonly iconPaymen: Locator;
  readonly itemImage: Locator;
  readonly itemTitle: Locator;
  readonly itemDesc: Locator;
  readonly itemPrice: Locator;
  readonly viewButtonAddCart: Locator;
  readonly addButtonCart: Locator;
  readonly removeButton: Locator;
  readonly clickImageDetail: Locator;
  readonly clickTitleDetail: Locator;

  constructor(page: Page) {
    super(page);
    // this.logo = page.locator("Swag Labs");
    this.appLogo = page.getByText("Swag Labs");
    this.title = page.locator('[data-test ="title"]');
    this.iconPaymen = page.locator('[data-test = "shopping-cart-link"]');
    // this.itemImage = page.locator('[data-test="item-4-img-link"]');
    this.itemImage = page.getByRole("img", { name: "Sauce Labs Backpack" });
    this.itemTitle = page.locator('[data-test = "item-4-title-link"]');
    this.itemDesc = page.locator('[data-test = "inventory-item-desc"]');
    this.itemPrice = page.locator('[data-test = "inventory-item-price"]');
    // this.buttonCart = page.locator(
    //   '[data-test = "add-to-cart-sauce-labs-backpack"]',
    // );
    this.viewButtonAddCart = page.getByRole("button", { name: "Add to cart" });
    this.addButtonCart = page.getByRole("button", { name: "Add to cart" });
    this.removeButton = page.getByRole("button", { name: "Remove" });
    this.clickImageDetail = page.getByRole("img", {
      name: "Sauce Labs Backpack",
    });
    this.clickTitleDetail = page.locator("[data-test=inventory-item-name]");
  }

  async goto() {
    await this.page.goto("/inventory.html");
  }
  async verifyUserOnInventoryPage() {
    await expect(this.appLogo).toHaveText("Swag Labs");
  }

  async verifyAppsHaveTitle() {
    await expect(this.title).toHaveText("Products");
  }

  async verifyClickButtonAddToCart() {
    await this.addButtonCart.first().click();
  }

  async verifClickRemoveButton() {
    await this.removeButton.click();
  }

  async clickDetailWithImage() {
    await this.clickImageDetail.click();
  }

  async clickDetailWithTitle() {
    await this.clickTitleDetail.click();
  }
}
