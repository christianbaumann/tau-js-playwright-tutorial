// to use chromium
const {chromium} = require('playwright');

// to use firefox
const {firefox} = require('playwright');

// to use webkit
const {webkit} = require('playwright');


(async () => { // anonymous arrow function
    // function code

    // launching browser
    const browser = await chromium.launch({headless: false, slowMo: 100});

    // creating a page inside browser
    const page = await browser.newPage();

    // navigating to site
    await page.goto('http://google.com');

    // closing browser
    await browser.close();

})(); // function calls itself