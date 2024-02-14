const token1 = "GZDN5VY-P784V2S-GN9K17T-7F6P97G";
const token2 = "9VTHB2B-GMD4FBC-KNEK1T6-YQBJCF7";
const token3 = "BQKVY82-WR64N98-G9ZFYBD-0GY2CBB";
const token4 = "94KW576-V5TMR5T-MDJXAN0-JRAC8WR";
const token5 = "KZQCWCS-39JM5KG-KV4Z5A1-MZB04E9";
const token6 = "7J1VR9Q-RD34CQF-QMWK1QS-EH5S1GM";
const token7 = "3KDGKWP-GDDMEQF-J8BPDDZ-379A8CA";
const token8 = "XAA14W2-3ZEMTWX-J5V2BC3-DF6W5D4";
const token9 = "3PQTT83-3HA4HYD-MN52MYF-XTHZ63Y";
const token10 = "KE44AQJ-1E14VPD-MX0QM0R-SH33296";

const options = {
  method: "GET",
  headers: { "X-API-KEY": token7},
};

export async function getPosts(url: string) {
  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return response;
}

export async function getMovies(url: string, array: any) {
  const data = await getPosts(url);
  const listData = data.docs.map((item: any) => ({
    id: item.id,
    name: item.name,
    imdb: item.rating.imdb,
    poster: item.poster.url,
    genres: item.genres[0].name,
    genres2: item.genres[1]?.name,
    genres3: item.genres[2]?.name,
  }));
  array(listData);
}

export const posterMissing =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBmvqZPI__CF8IAppXDzjHEuxp5iwRUgZqU4YlyleMT6XzLckXvYf97AGacD8-CHbGKw&usqp=CAU";

export const comedyLink =
  "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F";

export const actionMovieLink =
  "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&genres.name=%D0%B1%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA";

export const horrorLink =
  "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&genres.name=%D1%83%D0%B6%D0%B0%D1%81%D1%8B";

export const dramaLink =
  "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0";

export const movie = `https://api.kinopoisk.dev/v1.4/movie`;
