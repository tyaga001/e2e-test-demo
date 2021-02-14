const locators = require("../utils/locators");
let Page = require("./basePage");


function HomePage(driver) {
    Page.call(this, driver);
}

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

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
    pageIntroHeading = locators.pageIntroHeading;

HomePage.prototype.verifyChevronCircledDisabled = async function() {
    let firstCircle = await this.findByCss(chevronCircledDisabled);
    await this.click(firstCircle);
    let isDisabled = await firstCircle.isDisabled();
    return await this.driver.wait(async function() {
        return isDisabled;
    }, timeout);
};

HomePage.prototype.clickChevronCircled = async function() {
    let secondCircle = await this.findByCss(chevronCircled);
    await this.click(secondCircle);
    let isEnabled = await firstCircle.isEnabled();
    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};

HomePage.prototype.openCarsMenu = async function() {
    let carMenu = await this.findByXpath(carsMenu);
    return await this.click(carMenu);
};

HomePage.prototype.openSideMenu = async function() {
    let sideMenuList = await this.findByXpath(sideMenu);
    return await this.click(sideMenuList);
};

HomePage.prototype.getPageUrl = async function() {
    const homePageUrl = await this.driver.getCurrentUrl();
    return homePageUrl;
};

HomePage.prototype.homePageLogo = async function() {
    let logo = await this.findByXpath(mainPageLogo);
    await this.elementIsVisible(logo);
    let isVisible = await logo.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

HomePage.prototype.homePageHeading = async function() {
    let homePageInroductionHeading = await this.findByXpath(pageIntroHeading);
    await this.elementIsVisible(homePageInroductionHeading);
    let isVisible = await homePageInroductionHeading.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

HomePage.prototype.homePageIntroPara = async function() {
    let homePageInroductionPara = await this.findByXpath(pageIntroPara);
    await this.elementIsVisible(homePageInroductionPara);
    let isVisible = await homePageInroductionPara.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

HomePage.prototype.homePageProductListCarouselTitle = async function() {
    let carouselTitle = await this.findByXpath(productListCarouselTitle);
    await this.elementIsVisible(carouselTitle);
    let isVisible = await carouselTitle.isDisplayed()
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};

HomePage.prototype.verifyMainVideo = async function() {
    let openVideo = await this.findByCss(pageMainVideo);
    await this.elementIsVisible(openVideo);
    let isVisible = await openVideo.isDisplayed();
    await this.click(pageMainVideo);
    return await this.driver.wait(async function() {
        return isVisible;
    }, timeout);
};
module.exports = HomePage;