import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { superAdmin } from "../../utils/userFactory";
import loginData from "../../data/loginData.json";

for (const data of loginData) {
  test(`${data.id}. ${data.testName}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(data.email, data.password);

    if (data.expectedStatus === "success") {
      await expect(page).toHaveURL("/inventory.html");
      await expect(page.getByText("Products")).toBeVisible();
    } else {
      await expect(loginPage.errorMessage());
    }
  });
}
