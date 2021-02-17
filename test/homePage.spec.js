const chai = require("chai"),
    fs = require("fs"),
    expect = chai.expect,
    Page = require("../pageobjects/homePage");
CommonPage = require("../pageobjects/commonPage");
locators = require("../utils/locators");
const chaiAsPromised = require("chai-as-promised");
const {
    chevronCircledDisabled
} = require("../utils/locators");
//const locators = require("../utils/locators");
chai.use(chaiAsPromised);

let page, driver, commonPage;
const mochaTimeout = locators.mochaTimeout,
    baseUrl = locators.baseUrl,
    getTitle = locators.getTitle,
    nextCar = locators.nextCar;

describe("Automated test for Home Page", async function() {
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

    // it("Check the title of the page", async function() {
    //     const title = await commonPage.getTitle();
    //     expect(title).to.include(getTitle);
    // });

    it("Verify homePageLogo", async function() {
        let isDisplayed = await page.homePageLogo();
        expect(isDisplayed).to.equal(true);
    });

    it("Verify homePageIntroPara", async function() {
        let isDisplayed = await page.homePageIntroPara();
        expect(isDisplayed).to.be.true;
    });

    it("Verify homePageHeading", async function() {
        let isDisplayed = await page.homePageHeading();
        expect(isDisplayed).to.be.true;
    });

    // it("Verify homePageProductListCarouselTitle", async function() {
    //     let isDisplayed = await page.homePageProductListCarouselTitle();
    //     expect(isDisplayed).to.be.true;
    // });

    // it("Verify homePageverifyMainVideo", async function() {
    //     let isDisplayed = await page.verifyMainVideo();
    //     expect(isDisplayed).to.be.true;
    // });

    it("Verify chevron Circled Disabled", async function() {
        let isDisabled = await page.verifyChevronCircledDisabled();
        expect(isDisabled).to.be.true;
    });

    it("Verify chevron Circled Disabled", async function() {
        let isDisabled = await page.clickChevronCircled();
        let nextCar = nextCar;
        expect(nextCar).to.be.true;
    });


    after(async function() {
        await page.quit();
    });
});