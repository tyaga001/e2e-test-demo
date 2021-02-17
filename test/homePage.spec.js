const chai = require("chai"),
    fs = require("fs"),
    expect = chai.expect,
    Page = require("../pageobjects/homePage");
CommonPage = require("../pageobjects/commonPage");
locators = require("../utils/locators");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

let page, driver, javascriptExecutor, window;
const mochaTimeout = locators.mochaTimeout,
    baseUrl = locators.baseUrl,
    getTitle = locators.getTitle,
    chevronCircledDisabled = locators.chevronCircledDisabled,
    chevronCircled = locators.chevronCircled,
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
    //     ((javascriptExecutor), driver).executeScript("javascript:window.scrollBy(0,1000)");
    //     let isDisplayed = await page.homePageProductListCarouselTitle();
    //     expect(isDisplayed).to.be.true;
    // });

    it("Verify homePageverifyMainVideo", async function() {
        ((javascriptExecutor), driver).executeScript("javascript:window.scrollBy(0,500)");
        let isDisplayed = await page.verifyMainVideo();
        expect(isDisplayed).to.be.true;
    });

    it("Verify chevron Circled Disabled", async function() {
        ((javascriptExecutor), driver).executeScript("javascript:window.scrollBy(0,4500)");
        this.timeout = 2000;
        let isDisplayed = await page.verifyChevronCircledDisabled();
        expect(isDisplayed).to.be.true;
    });

    it("Verify next chevron is working fine", async function() {
        let nextCar = await page.clickChevronCircled();
    });


    after(async function() {
        await page.quit();
    });
});