const {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];
// https://playwright.dev/docs/emulation#geolocation
// https://playwright.dev/docs/test-configuration#mobile-emulation

(async () => {
    // mobile code
    const browser = await chromium.launch({headless: false, slowMo: 300});

    await browser.close();
})();