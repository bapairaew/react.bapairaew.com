import RSSParser from "rss-parser";

const rssParser = new RSSParser({
  customFields: {
    item: [
      "author_name",
      "book_large_image_url",
      "user_date_added",
      "user_rating",
    ],
  },
});

const { GOODREADS_ID: id } = process.env;

export const getBooks = () => {
  return rssParser
    .parseURL(`https://www.goodreads.com/review/list_rss/${id}`)
    .then((feed) =>
      feed.items.map((item) => ({
        id: item.guid,
        title: item.title,
        cover: item["book_large_image_url"],
        author: item["author_name"],
        href: item.link,
        rating: item["user_rating"],
        added: new Date(item["user_date_added"]).toJSON(),
      }))
    );
};
