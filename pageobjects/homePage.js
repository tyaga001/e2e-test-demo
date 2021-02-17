const {
    Browser
} = require("selenium-webdriver");
const locators = require("../utils/locators");
let Page = require("./basePage");

const mainPageLogo = locators.mainPageLogo,
    carsMenu = locators.carsMenu,
    timeout = locators.timeout,
    sideMenu = locators.sideMenu,
    pageIntroPara = locators.pageIntroPara,
    pageMainVideo = locators.pageMainVideo,
    productListCarouselTitle = locators.productListCarouselTitle,
    videoTestimonialsTitle = locators.videoTestimonialsTitle,
    productListCarouselItem = locators.productListCarouselItem,
    chevronCircledDisabled = locators.chevronCircledDisabled,
    chevronCircled = locators.chevronCircled,
    acceptButton = locators.acceptButton,
    pageIntroHeading = locators.pageIntroHeading;

Page.prototype.openApp = async function() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
};

Page.prototype.verifyChevronCircledDisabled = async function() {
    let browser = Browser;
    let firstCircle = await this.findByXpath(chevronCircledDisabled);
    browser.waitForVisible(chevronCircledDisabled);
    browser.scroll(chevronCircledDisabled);
    await this.click(firstCircle);
    let isDisabled = await firstCircle.isDisabled();
    return await this.driver.wait(async function() {
        return isDisabled;
    }, timeout);
};

Page.prototype.clickChevronCircled = async function() {
    let secondCircle = await this.findByXpath(chevronCircled);
    await this.click(secondCircle);
    let isEnabled = await firstCircle.isEnabled();
    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};

Page.prototype.openCarsMenu = async function() {
    let carMenu = await this.findByXpath(carsMenu);
    return await this.click(carMenu);
};

Page.prototype.openSideMenu = async function() {
    let sideMenuList = await this.findByXpath(sideMenu);
    return await this.click(sideMenuList);
};

Page.prototype.getPageUrl = async function() {
    const homePageUrl = await this.driver.getCurrentUrl();
    return homePageUrl;
};

Page.prototype.clickAcceptButton = async function() {
    let acceptBtn = await this.findByCss(acceptButton);
    await this.click(acceptBtn);
    let isEnabled = await acceptBtn.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};


Page.prototype.homePageLogo = async function() {
    let logo = await this.findByXpath(mainPageLogo);
    await this.elementIsVisible(logo);
    let isVisible = await logo.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

Page.prototype.homePageHeading = async function() {
    let homePageInroductionHeading = await this.findByXpath(pageIntroHeading);
    await this.elementIsVisible(homePageInroductionHeading);
    let isVisible = await homePageInroductionHeading.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

Page.prototype.homePageIntroPara = async function() {
    let homePageInroductionPara = await this.findByXpath(pageIntroPara);
    await this.elementIsVisible(homePageInroductionPara);
    let isVisible = await homePageInroductionPara.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

Page.prototype.homePageProductListCarouselTitle = async function() {
    let carouselTitle = await this.findByXpath(productListCarouselTitle);
    await this.elementIsVisible(carouselTitle);
    let isVisible = await carouselTitle.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

Page.prototype.verifyMainVideo = async function() {
    let openVideo = await this.findByXpath(pageMainVideo);
    await this.elementIsVisible(openVideo);
    let isVisible = await openVideo.isDisplayed();
    await this.click(pageMainVideo);
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};
module.exports = Page;