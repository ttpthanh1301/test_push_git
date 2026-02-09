// import { test, expect } from "@playwright/test";
// import useList from "../test-data/users.json";
// test.describe("Login Data Driven Testing", () => {
//   for (const user of useList) {
//     test(`Test case: ${user.desc} -User: ${user.username} `, async ({
//       page,
//     }) => {
//       await page.goto("https://www.saucedemo.com/");
//       //dien lay json
//       await page.locator('[data-test="username"]').fill(user.username);
//       await page.locator('[data-test="password"]').fill(user.password);
//       await page.locator('[data-test="login-button"]').click();
//       // Kiểm tra kết quả
//       //  // Nếu là case login thành công -> Check tiêu đề Products
//       if (user.desc === "Login thành công") {
//         await expect(page.locator(".title")).toHaveText(user.expectedMessage);
//       }
//       // Nếu là case lỗi -> Check thông báo lỗi màu đỏ
//       else {
//         await expect(page.locator('[data-test="error"]')).toContainText(
//           user.expectedMessage,
//         );
//       }
//     });
//   }
// });
// test("Login sai mật khẩu", async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await page.goto("https://www.facebook.com/");
//   await loginPage.login("test@gmail.com", "123456");

//   await loginPage.verifyLoginFailMessage(
//     "The password that you've entered is incorrect",
//   );
// });

