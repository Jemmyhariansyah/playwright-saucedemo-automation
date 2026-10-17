import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/inventoryPage";

test("Verification display the logo", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();
  await inventoryPage.verifyUserOnInventoryPage();
  await inventoryPage.verifyUserHaveTitle();
});
