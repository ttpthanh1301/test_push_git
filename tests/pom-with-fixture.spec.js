
import { test,  expect} from "./fixtures/pomFixtures";

test("Login successful with Fixtures", async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await inventoryPage.verifyPageTitle("Products");
});