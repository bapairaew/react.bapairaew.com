// https://github.com/vercel/og-image/blob/main/api/_lib/chromium.ts

import core from "puppeteer-core";
import chrome from "chrome-aws-lambda";

const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function getOptions(isDev) {
  let options;
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }
  return options;
}

let _page;

async function getPage(isDev) {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
}

export async function getScreenshot(text, type, isDev) {
  const page = await getPage(isDev);
  const rootUrl = isDev
    ? `http://localhost:${process.env.PORT || 3000}`
    : `https://${process.env.VERCEL_URL}`;
  await page.setViewport({ width: 2048, height: 1170 });
  await page.goto(`${rootUrl}/templates/og-image/${text}`);
  const file = await page.screenshot({ type });
  return file;
}
