const {chromium} = require('playwright');
// https://playwright.dev/docs/screenshots

(async () => { // anonymous arrow function
    // function code

    // launching browser
    const browser = await chromium.launch();
    // creating a page inside browser
    const page = await browser.newPage();
    // navigating to site
    await page.goto('https://applitools.com/');

    // take screenshot code

    await page.screenshot({path: 'screenshot.png'});

    // closing browser
    await browser.close();

})(); // function calls itself