module.exports = {
    // Start Page Locators
    mochaTimeout: 50000,
    baseUrl: "https://www.volvocars.com/intl/v/car-safety/a-million-more",
    cookieButton: "button[title='Cookie Settings']",
    acceptButton: "button[title='Accept']",
    getTitle: "A million more | Volvo Cars",
    alertBoxMessage: "#alert-box-message",
    alertBoxLogo: "div[class='optanon-alert-box-logo']",
    mainPageLogo: "//*[@data-autoid='nav:siteNavLogoMain']",
    carsMenu: "//*[@id='nav:topNavCarMenu']",
    sideMenu: "//nav[@role='navigation']//button[@id='nav:siteNavSideNavToggle']",
    pageIntroHeading: "//*[@data-autoid='ModelIntro-1']//h2",
    pageIntroPara: "//*[@data-autoid='ModelIntro-1']//p",
    pageMainVideo: "//*[@data-autoid='Video-1']",
    productListCarouselTitle: "//*[@data-autoid='ProductListCarousel-1]//h2",
    videoTestimonialsTitle: "//*[@data-autoid='VideoTestimonials-1']//h2",
    productListCarouselItem: "//[@data-autoid='productListCarouselItem:category']']//h2",
    chevronCircledDisabled: "//*[@data-autoid='springCarouselPreviousButton']",
    chevronCircled: "//*[@data-autoid='springCarouselNextButton']",
    nextCar: "//span[normalize-space()='V90 Recharge']",
    timeout: 5000,
    homePageUrl: "https://www.volvocars.com/intl/v/car-safety/a-million-more",


    // Cars Overlay Page Locators
    carMenuOverlay: "//div[@data-autoid='nav:carMenuDesktop']",
    leftPanelData: "//div[@role='tablist']",
    electricCar: "//h2[normalize-space()='Electric']",
    subTextElectricCar: "//p[normalize-space()='Pure electric']",
    hybridCar: "//h2[normalize-space()='Hybrids']",
    subTextHybridCar: "//p[normalize-space()='Plug-in hybrids']",
    mildHybridCar: "//h2[normalize-space()='Mild hybrids']",
    subTextMildHybridCar: "//p[normalize-space()='Mild hybrids | Micro hybrids']",
    carCategoryTitle: "//*[@id='site-nav-cars-menu-section-panel-1']//a[@data-autoid='nav:carCategoryTitle']",
    carCategoryTitle: "//*[@id='site-nav-cars-menu-section-panel-1']//a[@data-autoid='nav:carCategoryTitle']",


    // Side menu Details Page Locators
    sideNavLogoSmall: "//*[@data-autoid='nav:siteNavLogoSmall']",
    buildYourOwnLink: "//*[contains(text(),'Build Your Own')]//parent::a",
    buyLink: "//*[contains(text(),'Buy')]//parent::button",
    openBuyLink: "//*[contains(text(),'Buy')]//parent::button//*[local-name()='svg']",
    ownLink: "//*[contains(text(),'Own')]//parent::button",
    whyVolvoLink: "//*[contains(text(),'Why Volvo')]//parent::button",
    exploreLink: "//*[contains(text(),'Explore')]//parent::button",
    moreLink: "//*[contains(text(),'More')]//parent::button",
    closeButton: "//*[@data-autoid='nav:siteNavCloseIcon']",
    buyTitle: "//*[@data-autoid='nav:sideNavTitle']",
    backChevron: "//*[@data-autoid='chevron:180']",
    fleetSales: "//em[normalize-space()='Fleet sales']",
    usedCars: "//em[normalize-space()='Used cars']",
    diplomaticSales: "//em[normalize-space()='Diplomatic sales']"

};