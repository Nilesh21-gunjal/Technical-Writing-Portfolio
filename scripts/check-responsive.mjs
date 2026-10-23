import fs from "node:fs";
import puppeteer from "puppeteer-core";

const baseUrl = process.env.PORTFOLIO_URL || "http://127.0.0.1:4173";
const viewportSizes = [
  { width: 360, height: 800 },
  { width: 768, height: 1024 },
  { width: 1024, height: 900 },
  { width: 1440, height: 1000 },
];
const paths = [
  "/",
  "/API-Documentation/",
  "/API-Documentation/get-started/quickstart/",
  "/API-Documentation/reference/api-reference/",
  "/docs-as-code-guide/",
  "/work/vacuum-pump-service-manual/",
];
const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
].filter(Boolean);
const executablePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

async function openWithRetry(page, url) {
  let lastError;

  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  throw lastError;
}

if (!executablePath) {
  throw new Error("A Chrome or Chromium executable is required. Set CHROME_PATH to its executable path.");
}

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox"],
});

try {
  let checks = 0;

  for (const viewport of viewportSizes) {
    const page = await browser.newPage();
    await page.setViewport({
      ...viewport,
      deviceScaleFactor: 1,
      isMobile: viewport.width <= 768,
    });

    for (const pagePath of paths) {
      await openWithRetry(page, `${baseUrl}${pagePath}`);
      if (pagePath.includes("api-reference")) {
        await page.click("#load-api-reference");
        await page.waitForSelector("#swagger-ui .swagger-ui", { visible: true, timeout: 30000 });
      }
      const result = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
        h1Count: document.querySelectorAll("h1").length,
        hasMain: Boolean(document.querySelector("main")),
        imagesWithoutAlt: [...document.images].filter((image) => !image.hasAttribute("alt")).length,
      }));

      if (result.documentWidth > result.viewportWidth + 1) {
        throw new Error(`${pagePath} has horizontal overflow at ${viewport.width}px (${result.documentWidth}px document width).`);
      }
      if (result.h1Count !== 1) {
        throw new Error(`${pagePath} has ${result.h1Count} H1 elements at ${viewport.width}px.`);
      }
      if (!result.hasMain) {
        throw new Error(`${pagePath} is missing a main landmark at ${viewport.width}px.`);
      }
      if (result.imagesWithoutAlt !== 0) {
        throw new Error(`${pagePath} has ${result.imagesWithoutAlt} images without alt text at ${viewport.width}px.`);
      }

      checks += 1;
    }

    await page.close();
  }

  console.log(`Responsive checks passed for ${checks} page and viewport combinations.`);
} finally {
  await browser.close();
}
