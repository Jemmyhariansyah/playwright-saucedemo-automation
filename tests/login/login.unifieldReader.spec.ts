import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";

import { loginData, readExcel } from "../../utils/excelReader";
import { readData } from "../../utils/dataReader";

// const testData = readData("./data/loginData.json");
// const testData = readData("./data/loginData.xlsx", "Sheet1");
const testData = readData("./data/loginData.csv");

test.describe("Login Test", () => {
  for (const data of testData) {
    test(`Login test for - ${data.username}`, async ({ page }) => {
      test.skip(data.run !== "yes", "Run Flag=No");
      const loginPage = new LoginPage(page);

      await test.step("Go to login page", async () => {
        await loginPage.goto();
      });

      await test.step("Perform login", async () => {
        await loginPage.login(data.username, data.password);
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
