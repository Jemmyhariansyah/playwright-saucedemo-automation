import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { superAdmin } from "../../utils/userFactory";
import { readExcel } from "../../utils/excelReader";

const testData = readExcel("./data/loginData.xlsx", "Sheet1");

test.describe("Login Test - Excel", () => {
  for (const data of testData as any[]) {
    if (data.run !== "yes") continue;
    test(`Login test for: ${data.Username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(data.Username, data.Password);

      if (data.expected === "success") {
        await expect(page).toHaveURL("/inventory.html");
      } else {
        await expect(loginPage.errorMessage);
      }
    });
  }
});
