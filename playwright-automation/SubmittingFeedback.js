const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false }); // Run in non-headless mode for debugging
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Increase the timeout value for the page.goto operation
    await page.goto('https://onlinelibrary.wiley.com/feedback', { waitUntil: 'load', timeout: 60000 });

    // Example: Fill in the feedback form
    await page.fill('#nameInput', 'John Doe');
    await page.fill('#emailInput', 'john.doe@example.com');
    await page.fill('#feedbackTextArea', 'Great website!');
    await page.click('#submitFeedbackButton');

    // Add additional steps to verify successful submission or any validation messages

    console.log('Feedback form interaction test passed.');
  } catch (error) {
    console.error('Error occurred during navigation or interaction:', error);
  } finally {
    // Move browser.close() outside the try-catch block to ensure it is called regardless of the outcome
    await browser.close();
  }
})();
