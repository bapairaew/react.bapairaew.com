import querystring from "querystring";

const { IMDB_COOKIE: cookie } = process.env;

export const getMovies = (filter) => {
  return fetch(
    `https://www.imdb.com/list/ls089230524/search?${querystring.stringify({
      sort: "date_added,desc",
      view: "detail",
      pageId: "ls089230524",
      pageType: "list",
      subpageType: "watchlist",
    })}`,
    {
      headers: {
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
