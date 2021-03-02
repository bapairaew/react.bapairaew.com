import querystring from "querystring";

const { IMDB_COOKIE: cookie, IMDB_PAGE_ID: pageId } = process.env;

export const getMovies = () => {
  return fetch(
    `https://www.imdb.com/list/${pageId}/search?${querystring.stringify({
      sort: "date_added,desc",
      view: "detail",
      pageId,
      pageType: "list",
      subpageType: "watchlist",
      tracking_tag: "",
    })}`,
    {
      headers: {
        // NOTE: this is make IMDB returns English title instead romanization of the original title
        "accept-language": "en",
        // NOTE: cookie is needed to get personal rating
        cookie,
      },
    }
  )
    .then((r) => r.json())
    .then((data) =>
      data.list.items.map((item) => ({
        id: item.const,
        title: data.titles[item.const].primary.title,
        href: `https://www.imdb.com/${data.titles[item.const].primary.href}`,
        // Request smaller poster image to improve speed
        poster: data.titles[item.const].poster.url.replace(
          "._V1_.",
          encodeURIComponent("._UX384_CR0,0,384,568_AL_.") // 384 x 568
        ),
        rating: data.starbars[item.const].rating,
        added: new Date(item.added).toJSON(),
      }))
    );
};
