// https://github.com/vercel/og-image/blob/main/api/index.ts

import { getScreenshot } from "~/libs/chromium";

const isDev = !process.env.AWS_REGION;
const fileType = "png";

export default async function handler(req, res) {
  try {
    const { text } = req.query;
    const file = await getScreenshot(text.replace(".png", ""), fileType, isDev);
    res.statusCode = 200;
    res.setHeader("Content-Type", `image/${fileType}`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
}
