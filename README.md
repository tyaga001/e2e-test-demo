# Volvo Cars Test automation assignment: - Automation Testing With Node.js, Javascript And Selenium WebDriver

Test Framework Design in Page Objects

## Run application

Clone the repository

```bash
git clone https://github.com/tyaga001/volvocars-e2e-test
```

Install dependencies

```bash
npm i chai chai-as-promised chromedriver mocha mochawesome selenium-webdriver --save-dev

Install Node modules with command : npm i
```

Run test

```bash
mocha homePage.spec.js  #For only single individual test
npm test                #For Sequential Execution of tests
npm run test:parallel   #For Parallel Execution of tests
```

Folder Structure

    ├── ...
    │
    ├── pageobjects                 # Helper methods
    │   ├── homePage.js             # home page functionality for tests
    │   ├── startPage.js            # Start page testing functionality
    |   ├── carMenuPage.js          # Care page testing functionality
    |   └── sideMenuPage.js         # Side menu page testing functionality
    │
    ├── test                        # Test suite
    │   ├── homePage.spec.js        # Automated Test Script
    │   ├── startPage.spec.js       # Automated Test Script
    |
    ├── utils                       # Utility files for testing
    │   ├──locators.js              # HTML and CSS identifier for elements to test
    |
    ├── mochawesome-report          # Test Report for the tests executed
    |   ├──mochawesome.html         # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows
    |
    └── Screenshots                 # Screenshots captured for failed tests
