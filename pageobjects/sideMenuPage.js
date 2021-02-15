const locators = require("../utils/locators");
let Page = require("./basePage");
const {
    By
} = require('selenium-webdriver');

const sideNavLogoSmall = locators.sideNavLogoSmall,
    buildYourOwnLink = locators.buildYourOwnLink,
    acceptButton = locators.acceptButton,
    buyLink = locators.buyLink,
    ownLink = locators.ownLink,
    whyVolvoLink = locators.whyVolvoLink,
    exploreLink = locators.exploreLink,
    moreLink = locators.moreLink,
    closeButton = locators.closeButton,
    buyTitle = locators.buyTitle,
    backChevron = locators.backChevron,
    fleetSales = locators.fleetSales,
    usedCars = locators.usedCars,
    diplomaticSales = locators.diplomaticSales,
    sideMenu = locators.sideMenu,
    timeout = locators.timeout;

Page.prototype.openApp = async function() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
};

Page.prototype.openSideMenu = async function() {
    let sideMenuBar = await this.findByXpath(sideMenu);
    await this.sideMenuClick(sideMenuBar);
    let isEnabled = await sideMenuBar.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};


Page.prototype.verifySideNavLogo = async function() {
    let logo = await this.findByXpath(sideNavLogoSmall);
    return logo.isDisplayed();
}


Page.prototype.verifyBuildYourOwnLink = async function() {
    let link = await this.findByXpath(buildYourOwnLink);
    return link.isDisplayed();
}

Page.prototype.verifyBuyLink = async function() {
    let link = await this.findByXpath(buyLink);
    return link.isDisplayed();
}

Page.prototype.verifyOwnLink = async function() {
    let link = await this.findByXpath(ownLink);
    return link.isDisplayed();
}

Page.prototype.verifyWhyVolveLink = async function() {
    let link = await this.findByXpath(whyVolvoLink);
    return link.isDisplayed();
}

Page.prototype.verifyExploreLink = async function() {
    let link = await this.findByXpath(exploreLink);
    return link.isDisplayed();
}

Page.prototype.verifyMoreLink = async function() {
    let link = await this.findByXpath(moreLink);
    return link.isDisplayed();
}


Page.prototype.closeSideBar = async function() {
    let button = await this.findByXpath(closeButton);
    await this.click(button);
    let isEnabled = await button.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
}

Page.prototype.clickAcceptButton = async function() {
    let acceptBtn = await this.findByCss(acceptButton);
    await this.click(acceptBtn);
    let isEnabled = await acceptBtn.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
};


Page.prototype.openBuyPanel = async function() {
    let link = await this.findByXpath(buyLink);
    await this.click(link);
    let isEnabled = await buyLink.isEnabled();

    return await this.driver.wait(async function() {
        return isEnabled;
    }, timeout);
}

Page.prototype.verifyBuyTitle = async function() {
    let title = await this.findByXpath(buyTitle);
    return title.isDisplayed();
}

Page.prototype.verifyFleetSalesSubTitle = async function() {
    let title = await this.findByXpath(fleetSales);
    return title.isDisplayed();
}


Page.prototype.verifyUsedCarsSubTitle = async function() {
    let title = await this.findByXpath(usedCars);
    return title.isDisplayed();
}


Page.prototype.verifyDiplomaticSalesSubTitle = async function() {
    let title = await this.findByXpath(diplomaticSales);
    return title.isDisplayed();
}

module.exports = Page;