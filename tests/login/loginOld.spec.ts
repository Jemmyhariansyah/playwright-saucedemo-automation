import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPageOld";
import { superAdmin } from "../../utils/userFactory";

test("Login with valid user", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    superAdmin.validUser.email,
    superAdmin.validUser.password,
  );

  //   await page.waitForLoadState("networkidle");
  await expect(page.getByText("Swag Labs"));
});

test("Login with invalid user", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    superAdmin.invalidUser.email,
    superAdmin.invalidPassword.password,
  );

  await loginPage.errorMessage();
});

test("Login with invalid password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    superAdmin.invalidPassword.email,
    superAdmin.invalidPassword.password,
  );

  await loginPage.errorMessage();
});
