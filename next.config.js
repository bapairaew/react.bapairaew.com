const { withPlausibleProxy } = require("next-plausible");
const mdxEnhanced = require("next-mdx-enhanced");

module.exports = withPlausibleProxy()(
  mdxEnhanced({
    layoutPath: "components",
  })({
    images: {
      domains: [
        "i.scdn.co", // Spotify Album Art
        "m.media-amazon.com", // IMDB movie poster
        "static.whiskybase.com", // Whiskybase bottle photo
        "i.gr-assets.com", // Goodreads cover image
      ],
    },
  })
);
