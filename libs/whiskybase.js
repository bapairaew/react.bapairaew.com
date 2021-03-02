import csvtojson from "csvtojson";

const { WHISKYBASE_COOKIE: cookie, WHISKYBASE_ID: id } = process.env;

export const getWhiskies = () => {
  return fetch(
    `https://www.whiskybase.com/profile/${id}/downloadlist/collection/csv`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36",
        cookie,
      },
    }
  )
    .then((r) => r.text())
    .then((csv) => csvtojson().fromString(csv))
    .then((list) =>
      list
        .sort((a, b) => b["Added on"].localeCompare(a["Added on"]))
        .map((data) => ({
          id: data["ID"],
          title: [data["Brand"], data["Name"]].filter((x) => x).join(" "),
          photo: `https://static.whiskybase.com/storage/whiskies/${
            data["ID"][0]
          }/${data["ID"][1]}/${data["ID"].slice(2)}/${data["Photo"]}-big.jpg`,
          href: `https://www.whiskybase.com/whiskies/whisky/${data["ID"]}`,
          rating: Math.ceil(+data["My rating"] / 20), // Make it 0 - 5 range
          added: data["Added on"].split(" ")[0],
        }))
    );
};
