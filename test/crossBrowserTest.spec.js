const webdriver = require('selenium-webdriver');
// Input capabilities
const capabilities = {
    'os_version': '10',
    'resolution': '1920x1080',
    'browserName': 'Firefox',
    'browser_version': 'latest',
    'os': 'Windows',
    'name': 'Home Page Test',
    'build': 'Build Number 1',
    'browserstack.user': 'YOUR_USERNAME',
    'browserstack.key': 'YOUR_ACCESS_KEY'
}
async function runHomePageTest() {
    let driver;
    try {
        driver = new webdriver.Builder().
        usingServer('http://hub-cloud.browserstack.com/wd/hub').
        withCapabilities(capabilities).build();
        await driver.get(' https://www.volvocars.com/intl/v/car-safety/a-million-more');
        await (await driver.findElement(webdriver.By.xpath('button[title="Accept"]')));
        const title = await driver.getTitle();
        console.log(title);
        // Setting the status of test as 'passed' or 'failed' based on the condition; if title of the web page included 'A million more | Volvo Cars'
        if (title.includes('A million more | Volvo Cars')) {
            await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}');
        } else {
            await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Title does not contain BrowserStack!"}}');
        }
    } catch (e) {
        console.log(e);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}
runHomePageTest();