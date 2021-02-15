const chai = require("chai"),
    fs = require("fs"),
    expect = chai.expect,
    Page = require("../pageobjects/sideMenuPage");
locators = require("../utils/locators");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

let page, driver;
const mochaTimeout = locators.mochaTimeout,
    baseUrl = locators.baseUrl;

describe("Automated test for side menu panel", async function() {
    this.timeout(mochaTimeout);

    before(async function() {
        page = new Page();
        driver = page.driver;
        await page.visit(baseUrl);
        await page.openApp();
    });

    it("open side menu", async function() {
        let isEnabled = await page.openSideMenu;
        expect(isEnabled).to.be.true;
    });

    it("Verify Side Nav Logo", async function() {
        let isDisplayed = await page.verifySideNavLogo();
        expect(isDisplayed).to.be.true;
    });


    it("Verify Build Your Own Link", async function() {
        let isDisplayed = await page.verifyBuildYourOwnLink();
        expect(isDisplayed).to.be.true;
    });

    it("Verify Buy Link", async function() {
        let isDisplayed = await page.verifyBuyLink();
        expect(isDisplayed).to.be.true;
    });


    it("Verify Own Link", async function() {
        let isDisplayed = await page.verifyOwnLink();
        expect(isDisplayed).to.be.true;
    });


    it("Verify Why Volve Link", async function() {
        let isDisplayed = await page.verifyWhyVolveLink();
        expect(isDisplayed).to.be.true;
    });


    it("Verify Explore Link", async function() {
        let isDisplayed = await page.verifyExploreLink();
        expect(isDisplayed).to.be.true;
    });

    it("Verify More Link", async function() {
        let isDisplayed = await page.verifyMoreLink();
        expect(isDisplayed).to.be.true;
    });

    it("Open Buy Panel", async function() {
        let isEnabled = await page.openBuyPanel();
        expect(isEnabled).to.be.true;
    });


    it("Verify Buy Title", async function() {
        let isEnabled = await page.verifyBuyTitle();
        expect(isEnabled).to.be.true;
    });


    it("Verify Fleet Sales Sub Title", async function() {
        let isEnabled = await page.verifyFleetSalesSubTitle();
        expect(isEnabled).to.be.true;
    });


    it("Verify Used Cars Sub Title", async function() {
        let isEnabled = await page.verifyUsedCarsSubTitle();
        expect(isEnabled).to.be.true;
    });


    it("Verify Diplomatic Sales Sub Title", async function() {
        let isEnabled = await page.verifyDiplomaticSalesSubTitle();
        expect(isEnabled).to.be.true;
    });

    it("Close Side Panel", async function() {
        let isEnabled = await page.closeSideBar();
        expect(isEnabled).to.be.true;
    });


    after(async function() {
        await page.quit();
    });
});