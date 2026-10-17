import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { superAdmin } from "../../utils/userFactory";
// import loginData from "../../data/loginData.json";
import { readCSV } from "../../utils/csvReader";

const loginData = readCSV("./data/loginData.csv");

loginData.forEach((data: any) => {
  if (data.run !== "true") return;

  test(`login test - ${data.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);

    if (data.expected == "success") {
      await expect(page).toHaveURL("/inventory.html");
    } else {
      await expect(loginPage.errorMessage());
    }
  });
});
