import querystring from "querystring";
import { parseMovie } from "~/libs/parser";

const { IMDB_COOKIE: cookie } = process.env;

export const getMovies = () => {
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
        // NOTE: cookie is needed to get personal rating
        cookie,
      },
    }
  )
    .then((r) => r.json())
    .then(parseMovie);
};
