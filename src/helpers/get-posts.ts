
const options = {
  method: "GET",
  headers: { "X-API-KEY":"KZQCWCS-39JM5KG-KV4Z5A1-MZB04E9"},
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
