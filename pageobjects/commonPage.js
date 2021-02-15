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


Page.prototype.getTitle = async function() {
    const title = await this.driver.getTitle();
    return title;
};

module.exports = Page;