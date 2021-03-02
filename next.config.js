module.exports = require("next-mdx-enhanced")({
  layoutPath: "components",
})({
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "m.media-amazon.com", // IMDB movie poster
      "static.whiskybase.com", // Whiskybase bottle photo
    ],
  },
});
