const locators = require("../utils/locators");
let Page = require("./basePage");

const carMenuOverlay = locators.carMenuOverlay,
    timeout = locators.timeout;

Page.prototype.openApp = async function() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
};
module.exports = Page;