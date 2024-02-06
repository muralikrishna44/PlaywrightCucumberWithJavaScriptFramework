const { expect } = require("chai");

class CheckoutProductPage {

    async navigate() {
        await page.goto('https://www.saucedemo.com/v1/');
    }

    async enterUserName(username) {
        await page.fill('//input[@id="user-name"]',username);
    }

    async enterPassword(password) {
        await page.fill('//input[@type="password"]',password);
    }

    async clickLoginButton() {
        await page.click('//input[@value="LOGIN"]');
    }
    async verifyLoginpagesuccessful() {
        expect (await page.$('.product_label')).to.not.be.null;
    }

    async clickOnAddCartButton() {
        await page.click('(//button[@class="btn_primary btn_inventory"])[1]');
    }

    async clickOnContainerButton() {
        await page.click('//div[@id="shopping_cart_container"]');
    }

    async clickOnContainerButton() {
        await page.click('//div[@id="shopping_cart_container"]');
    }

    async clickOnCheckoutButton() {
        await page.click('//a[@class="btn_action checkout_button"]');
    }

    async enterFirstName(firstName) {
        await page.fill('//input[@id="first-name"]',firstName);
    }

    async enterLastName(lastName) {
        await page.fill('//input[@id="last-name"]',lastName);
    }

    async enterPostalCode(postalCode) {
        await page.fill('//input[@id="postal-code"]',postalCode);
    }

    async clickOnContinueButton() {
        await page.click('//input[@class="btn_primary cart_button"]');
    }

    async clickOnFinishButton() {
        await page.click('//a[@class="btn_action cart_button"]');
    }
}

module.exports = { CheckoutProductPage };