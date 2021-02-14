const chai = require("chai"),
    fs = require("fs"),
    expect = chai.expect,
    Page = require("../pageobjects/startPage");
locators = require("../utils/locators");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

let page, driver;
const mochaTimeout = locators.mochaTimeout,
    baseUrl = locators.baseUrl,
    getTitle = locators.getTitle;

describe("Automated test for alert box message", async function() {
    this.timeout(mochaTimeout);

    before(async function() {
        page = new Page();
        driver = page.driver;
        await page.visit(baseUrl);
        await page.openApp();
    });

    it("Check the title of the page", async function() {
        const title = await page.getTitle();
        expect(title).to.include(getTitle);
    });

    it("Verify alert box message text para", async function() {
        let isDisplayed = await page.alertBoxMessageText();
        expect(isDisplayed).to.equal(true);
    });

    it("Verify alert box logo", async function() {
        let isDisplayed = await page.alertBoxLogoText();
        expect(isDisplayed).to.be.true;
    });

    it("Verify whether the accept Button is enabled and click on it", async function() {
        let isEnabled = await page.clickAcceptButton();
        expect(isEnabled).to.be.true;
    });

    after(async function() {
        await page.quit();
    });
});