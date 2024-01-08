const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

 
  await page.goto('https://onlinelibrary.wiley.com/search');

 
  await page.fill('#searchInput', 'test automation');


  await page.click('#searchButton');

  // verify search 
  const searchResults = await page.$('.searchResults');
  if (searchResults) {
    console.log('Search functionality test passed.');
  } else {
    console.error('Search functionality test failed.');
  }

  await browser.close();
})();
