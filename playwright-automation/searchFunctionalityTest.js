const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Replace 'https://onlinelibrary.wiley.com/search' with the actual URL of your search page
  await page.goto('https://onlinelibrary.wiley.com/search');

  // Fill in search query
  await page.fill('#searchInput', 'test automation');

  // Click the "Search" button
  await page.click('#searchButton');

  // Verify search results
  const searchResults = await page.$('.searchResults');
  if (searchResults) {
    console.log('Search functionality test passed.');
  } else {
    console.error('Search functionality test failed.');
  }

  await browser.close();
})();
