const puppeteer = require('puppeteer');
const fs = require('fs');
const URL = require('url').URL;
const path = require('path');

const baseUrl = 'https://quizsavera.com/';
const maxDepth = 1; // Set the maximum depth for crawling
const visitedUrls = new Set();
const sitemap = [];
const urlHierarchy = {}; // Object to maintain URL hierarchy

async function crawl(url, depth, parentUrl = null) {
    if (depth > maxDepth || visitedUrls.has(url)) {
        return;
    }

    console.log(`Crawling: ${url}`);
    visitedUrls.add(url);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Wait for the page to fully render
    // await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the timeout as needed

    const links = await page.evaluate(() => {
        const urls = document.querySelectorAll('a');
        return Array.from(urls)
            .map(anchor => anchor.href)
            .filter(href => href.startsWith('http'));
    });

    sitemap.push(url);
    //console.log(`Total URLs found so far: ${sitemap.length}`);

    // Maintain hierarchy
    if (parentUrl) {
        if (!urlHierarchy[parentUrl]) {
            urlHierarchy[parentUrl] = [];
        }
        urlHierarchy[parentUrl].push(url);
    } else {
        if (!urlHierarchy[url]) {
            urlHierarchy[url] = [];
        }
    }

    await browser.close();

    for (const link of links) {
        const linkUrl = new URL(link, baseUrl).href;
        if (linkUrl.startsWith(baseUrl)) {
            await crawl(linkUrl, depth + 1, url);
        }
    }
}

(async () => {
    await crawl(baseUrl, 0);

    const generateSitemapXml = (url, depth = 0) => {
        let xml = `<url><loc>${url}</loc></url>\n`;
        if (urlHierarchy[url]) {
            for (const childUrl of urlHierarchy[url]) {
                xml += generateSitemapXml(childUrl, depth + 1);
            }
        }
        return xml;
    };

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateSitemapXml(baseUrl)}
</urlset>`;

    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    console.log(`Saving sitemap to: ${outputPath}`);
    fs.writeFileSync(outputPath, sitemapXml);
    console.log(`Sitemap generated successfully. Total URLs found: ${sitemap.length}`);
})();
