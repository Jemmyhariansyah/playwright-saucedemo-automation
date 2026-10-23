import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/inventoryPage";
import { LoginPage } from "../../pages/loginPage";
// import BasePage from "../../pages/basePage";

test("Verification Ensuring that the product catalogue’s home page loads successfully ", async ({
  page,
}) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();

  await inventoryPage.verifyUserOnInventoryPage();
  await inventoryPage.verifyAppsHaveTitle();

  await expect(inventoryPage.itemImage).toBeVisible();
  await expect(inventoryPage.itemTitle).toHaveText("Sauce Labs Backpack");
  await expect(inventoryPage.itemDesc.first()).toBeVisible();
  await expect(inventoryPage.itemPrice.first()).toBeVisible();
  await expect(inventoryPage.viewButtonAddCart.first()).toBeVisible();
});

test("Verification Button Add to Cart", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();

  await inventoryPage.verifyClickButtonAddToCart();
  await expect(inventoryPage.iconCartRed).toBeVisible();
  await inventoryPage.verifclickAddtoChartButton();

  await inventoryPage.verifClickRemoveButton();
  await expect(inventoryPage.iconCartRed).not.toBeVisible();
  await inventoryPage.verifyRemoveButton();
});

test("View product details via the title text or image", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();

  await inventoryPage.clickDetailWithImage();
  await inventoryPage.backToProductItem();

  await inventoryPage.clickDetailWithTitle();
  await inventoryPage.backToProductItem();
});
