const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the registration page
  await page.goto('https://onlinelibrary.wiley.com/register');

  // Fill in registration form
  await page.fill('#username', 'newUser');
  await page.fill('#email', 'newuser@example.com');
  await page.fill('#password', 'password123');

  // Click the "Register" button
  await page.click('#registerButton');

  // Wait for registration process to complete
  await page.waitForNavigation();

  // Verify successful registration
  const registrationSuccessMessage = await page.$('#registrationSuccessMessage');
  if (registrationSuccessMessage) {
    console.log('User registration successful! Test passed.');
  } else {
    console.error('User registration failed! Test failed.');
  }

  await browser.close();
})();
