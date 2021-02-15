const locators = require("../utils/locators");
let Page = require("./basePage");

const carMenuOverlay = locators.carMenuOverlay,
    leftPanelData = locators.leftPanelData,
    electricCar = locators.electricCar,
    subTextElectricCar = locators.subTextElectricCar,
    hybridCar = locators.hybridCar,
    subTextHybridCar = locators.subTextHybridCar,
    mildHybridCar = locators.mildHybridCar,
    subTextMildHybridCar = locators.subTextMildHybridCar,
    carCategoryTitle = locators.carCategoryTitle,
    acceptButton = locators.acceptButton,
    timeout = locators.timeout;

Page.prototype.openApp = async function() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
};

Page.prototype.clickCarMenu = async function() {
    let overlay = await this.findByXpath(carMenuOverlay);
    await this.click(overlay);
    return await this.driver.getCurrentUrl();
}

Page.prototype.leftPanelList = async function() {
    let data = await this.findByXpath(leftPanelData);
    return data.isDisplayed();
}

Page.prototype.VerifyElectricCarText = async function() {
    let electricCarText = await this.findByXpath(electricCar);
    return electricCarText.isDisplayed();
}

Page.prototype.VerifyElectricCarSubText = async function() {
    let text = await this.findByXpath(subTextElectricCar);
    return text.isDisplayed();
}

Page.prototype.clickAcceptButton = async function() {
    let acceptBtn = await this.findByCss(acceptButton);
    await this.click(acceptBtn);
    let isEnabled = await acceptBtn.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};

Page.prototype.VerifyHybridCarText = async function() {
    let text = await this.findByXpath(hybridCar);
    return text.isDisplayed();
}

Page.prototype.VerifyHybridCarSubText = async function() {
    let text = await this.findByXpath(subTextHybridCar);
    return text.isDisplayed();
}

Page.prototype.VerifyMildHybridCarText = async function() {
    let text = await this.findByXpath(mildHybridCar);
    return text.isDisplayed();
}

Page.prototype.VerifyMildHybridCarSubText = async function() {
    let text = await this.findByXpath(subTextMildHybridCar);
    return text.isDisplayed();
}

module.exports = Page;