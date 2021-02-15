const {
    expect
} = require("chai");
const fetch = require("node-fetch");
const {
    Browser
} = require("selenium-webdriver");

describe('broken link test', function() {

    it("Check broken links", async function() {
        Browser.url('/status_codes/200');

        const links = $$('a');
        const urls = links.map(link => link.getAttribute('href'));
        const requests = urls.map(url => fetch(url));
        const responses = await Promise.all(requests);
        const statusCodes = responses.map(response => response.status);
        statusCodes.forEach(statusCode => {
            expect(statusCode).to.be.below(400);

        })
    });

});