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
    carsMenu: "//*[contains(text(),'Cars')]//parent::button",
    sideMenu: "//*[@fill='currentColor']",
    pageIntroHeading: "//*[@data-autoid='ModelIntro-1']//h2",
    pageIntroPara: "//*[@data-autoid='ModelIntro-1']//p",
    pageMainVideo: "//*[@data-autoid='Video-1']",
    productListCarouselTitle: "//*[@data-autoid='ProductListCarousel-1]//h2",
    videoTestimonialsTitle: "//*[@data-autoid='VideoTestimonials-1']//h2",
    productListCarouselItem: "//[@data-autoid='productListCarouselItem:category']']//h2",
    chevronCircledDisabled: "//*[@data-autoid='chevronCircled:rotated--180']",
    chevronCircled: "//*[@data-autoid='chevronCircled:rotated-0']",
    timeout: 5000,
    homePageUrl: "https://www.volvocars.com/intl/v/car-safety/a-million-more",


    // Cars Overlay Page Locators
    carMenuDesktopItems: "//*[@data-autoid='nav:carMenuDesktop']",
    electricCar: "//h2[normalize-space()='Electric']",


    // Chevron Circled Details Page Locators
    siteNavLogoSmall: "//*[@data-autoid='nav:siteNavLogoSmall']",
    buildYourOwnLink: "//*[contains(text(),'Build Your Own')]//parent::a",
    buyLink: "//*[contains(text(),'Buy')]//parent::button",
    ownLink: "//*[contains(text(),'Own')]//parent::button",
    whyVolvoLink: "//*[contains(text(),'Why Volvo')]//parent::button",
    exploreLink: "//*[contains(text(),'Explore')]//parent::button",
    moreLink: "//*[contains(text(),'More')]//parent::button"


};