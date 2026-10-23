import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { superAdmin } from "../../utils/userFactory";
import { loginData, readExcel } from "../../utils/excelReader";

const testData: loginData[] = readExcel("./data/loginData.xlsx", "Sheet1");

test.describe("Login Test - Excel", () => {
  for (const data of testData) {
    if (data.run !== "yes") continue;
    test(`Login test for: ${data.Username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await test.step("Go to login page", async () => {
        await loginPage.goto();
      });
      await test.step("Perform login", async () => {
        await loginPage.login(data.Username, data.Password);
      });
      await test.step("Validate result", async () => {
        if (data.expected === "success") {
          await expect(page).toHaveURL("/inventory.html");
        } else {
          await expect(loginPage.errorMessage);
        }
      });
    });
  }
});
