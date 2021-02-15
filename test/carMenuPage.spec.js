const chai = require("chai"),
    fs = require("fs"),
    expect = chai.expect,
    Page = require("../pageobjects/carsMenuPage");
locators = require("../utils/locators");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

let page, driver;
const mochaTimeout = locators.mochaTimeout,
    baseUrl = locators.baseUrl,
    getTitle = locators.getTitle;

describe("Automated test for cars menu overlay", async function() {
    this.timeout(mochaTimeout);

    before(async function() {
        page = new Page();
        driver = page.driver;
        await page.visit(baseUrl);
        await page.openApp();
    });

    it("Verify whether the accept Button is enabled and click on it", async function() {
        let isEnabled = await page.clickAcceptButton();
        expect(isEnabled).to.be.true;
    });

    it("Open car menu", async function() {
        let isEnabled = await page.clickCarMenu();
    });

    it("Verify left Panel List Data", async function() {
        let isDisplayed = await page.leftPanelList();
        expect(isDisplayed).to.be.true;
    });

    it("Verify left Panel Electric Car Text", async function() {
        let isDisplayed = await page.VerifyElectricCarText();
        expect(isDisplayed).to.be.true;
    });

    it("Verify left Panel Electric Car Sub Text", async function() {
        let isDisplayed = await page.VerifyElectricCarSubText();
        expect(isDisplayed).to.be.true;
    });

    it("Verify left Panel Hybrid Car Text", async function() {
        let isDisplayed = await page.VerifyHybridCarText();
        expect(isDisplayed).to.be.true;
    });

    it("Verify left Panel Hybrid Car Sub Text", async function() {
        let isDisplayed = await page.VerifyHybridCarSubText();
        expect(isDisplayed).to.be.true;
    });

    after(async function() {
        await page.quit();
    });
});