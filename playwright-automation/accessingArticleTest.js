const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false }); // Run in non-headless mode for debugging
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to the Wiley Online Library login page
    await page.goto('https://onlinelibrary.wiley.com/login', { waitUntil: 'load', timeout: 30000 });

    // Example: Fill in the login form
    await page.fill('#usernameInput', 'yourUsername', { timeout: 60000 }); // Increase the timeout for the fill operation
    await page.fill('#passwordInput', 'yourPassword', { timeout: 60000 }); // Increase the timeout for the fill operation
    await page.click('#loginButton'); // Replace with the actual selector for the login button

    // Wait for user account information to load
    await page.waitForSelector('.user-account-info', { state: 'visible' }); // Replace with the actual selector for the user account info

    // Example: Verify the user's account information
    const accountInfo = await page.textContent('.user-account-info'); // Replace with the actual selector for the account info container

    console.log('User account information check passed:', accountInfo);
  } catch (error) {
    console.error('Error occurred during login or account information check:', error);
  } finally {
    await browser.close();
  }
})();
