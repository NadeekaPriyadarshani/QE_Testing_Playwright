const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

 
  await page.goto('https://onlinelibrary.wiley.com/register');

 
  await page.fill('#username', 'newUser');
  await page.fill('#email', 'newuser@example.com');
  await page.fill('#password', 'password123');

  
  await page.click('#registerButton');

 
  await page.waitForNavigation();

  // verify successful registration
  const registrationSuccessMessage = await page.$('#registrationSuccessMessage');
  if (registrationSuccessMessage) {
    console.log('User registration successful! Test passed.');
  } else {
    console.error('User registration failed! Test failed.');
  }

  await browser.close();
})();
