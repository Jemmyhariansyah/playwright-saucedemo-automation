import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { superAdmin } from "../../utils/userFactory";

test("Authentication", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    superAdmin.validUser.email,
    superAdmin.validUser.password,
  );
  await page.waitForURL("/inventory.html", { timeout: 15000 });

  //    Pastikan halaman produk benar-benar sudah tampil sebelum menyimpan sesi
  await expect(page.getByText("Products")).toBeVisible();

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });

  //   await page.context().storageState({
  //     path: "playwright/.auth/user.json",
  //   });
});
