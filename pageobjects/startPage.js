const locators = require("../utils/locators");
let Page = require("./basePage");
const {
    By
} = require('selenium-webdriver');

const acceptButton = locators.acceptButton,
    alertBoxMessage = locators.alertBoxMessage,
    cookieButton = locators.cookieButton,
    alertBoxLogo = locators.alertBoxLogo;
timeout = locators.timeout,

    Page.prototype.openApp = async function() {
        await this.driver.manage().window().maximize();
        await this.driver.manage().deleteAllCookies();
    };

Page.prototype.clickAcceptButton = async function() {
    let acceptBtn = await this.findByCss(acceptButton);
    await this.click(acceptBtn);
    let isEnabled = await acceptBtn.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};

Page.prototype.getTitle = async function() {
    const title = await this.driver.getTitle();
    return title;
};


Page.prototype.clickCookieButton = async function() {
    let cookieButtonElement = await this.findByCss(cookieButton);
    await this.click(cookieButtonElement);
    return await this.driver.getCurrentUrl();
}

Page.prototype.alertBoxMessageText = async function() {
    let alertBoxMessageText = await this.findByCss(alertBoxMessage);
    return alertBoxMessageText.isDisplayed();
}

Page.prototype.alertBoxLogoText = async function() {
    let alertBoxLogoItem = await this.findByCss(alertBoxLogo);
    return alertBoxLogoItem.isDisplayed();
}
module.exports = Page;