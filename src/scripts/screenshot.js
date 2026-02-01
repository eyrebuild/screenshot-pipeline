import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
  ],
});
const page = await browser.newPage();
await page.goto('https://eyrebuild.github.io/screenshot-pipeline/', {
  waitUntil: 'networkidle2',
});
await page.screenshot({
  path: 'public/homepage-screenshot.png',
});

await browser.close();