// Source: https://github.com/leerob/leerob.io/blob/main/lib/spotify.js
import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(
    `https://api.spotify.com/v1/me/top/tracks?${querystring.stringify({
      time_range: "short_term",
      limit: 40,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((r) => r.json());
};

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch(
    `https://api.spotify.com/v1/me/top/artists?${querystring.stringify({
      time_range: "short_term",
      limit: 9,
    })}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((r) => r.json());
};
