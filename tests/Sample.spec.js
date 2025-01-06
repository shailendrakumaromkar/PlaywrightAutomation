const {test, expect} = require("@playwright/test")


test("First Test", async({page})=>{
 await  page.goto("https://playwright.dev/");

 await expect (page).toHaveTitle(/Playwright/)

 //await page.locator(".getStarted_Sjon").click();

 //await page.getByText("Get started").click();
 await page.getByRole("link", {name:"Get started"}).click()

 await page.pause()

})