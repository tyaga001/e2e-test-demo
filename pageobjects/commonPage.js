const locators = require("../utils/locators");
let Page = require("./basePage");
const {
    By
} = require('selenium-webdriver');

function CommonPage(driver) {
    Page.call(this, driver);
}

CommonPage.prototype = Object.create(Page.prototype);
CommonPage.prototype.constructor = CommonPage;

const acceptButton = locators.acceptButton,
    timeout = locators.timeout;

CommonPage.prototype.openApp = async function() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
};


CommonPage.prototype.getTitle = async function() {
    const title = await this.driver.getTitle();
    return title;
};

module.exports = CommonPage;