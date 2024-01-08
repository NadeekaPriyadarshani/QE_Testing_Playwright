const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    
    await page.goto('https://onlinelibrary.wiley.com/articles', { waitUntil: 'domcontentloaded', timeout: 60000 });

    
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    
    await page.click('.randomArticleLink', { timeout: 60000 }); 

    
    await page.waitForSelector('.article-content', { state: 'visible', timeout: 60000 });

    //Verify  full content of the article is displayed
    const articleContent = await page.textContent('.article-content'); 

    console.log('Accessing article test passed. Article content:', articleContent);
  } catch (error) {
    console.error('Error occurred during accessing article test:', error);
  } finally {
    // Close the page and browser only 
    if (page) await page.close();
    if (browser) await browser.close();
  }
})();
