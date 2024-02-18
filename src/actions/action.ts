import { getPosts } from "../helpers/get-posts";
import { store } from "../App";

export const openModalCard = () => ({
  type: "OPEN_MODAL_CARD",
});

export const closeModalCard = () => ({
  type: "CLOSE_MODAL_CARD",
});

export const authorization = () => ({
  type: "AUTHORIZATION",
});

export const notAuthorization = () => ({
  type: "NOT_AUTHORIZATION",
});

export const registration = () => ({
  type: "REGISTRATION",
});

export const notRegistration = () => ({
  type: "NOT_REGISTRATION",
});

const showMorePosts = (posts: any) => ({
  type: "SHOW_MORE",
  payload: posts,
});

const showFilmById = (idFilm: any) => ({
  type: "SHOW_FILM_BY_ID",
  payload: idFilm,
});

const showMoviesBySearch = (posts: any) => ({
  type: "SHOW_MOVIES_BY_SEARCH",
  payload: posts,
});

const showMoviesBySearchIsActive = () => ({
  type: "SHOW_MOVIES_BY_SEARCH_IS_ACTIVE",
});

export const showMoviesBySearchIsNotActive = () => ({
  type: "SHOW_MOVIES_BY_SEARCH_IS_NOT_ACTIVE",
});

export const searchMovies =
  (value: any) => async (dispatch: typeof store.dispatch) => {
    const data = await getPosts(
      `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=50&query=${value}`
    );
    dispatch(showMoviesBySearch(data));
    dispatch(showMoviesBySearchIsActive());
  };

export const addMoreFilms =
  (count: any) => async (dispatch: typeof store.dispatch) => {
    const data = await getPosts(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${count}`
    );
    dispatch(showMorePosts(data));
  };

export const getFilmById =
  (id: any) => async (dispatch: typeof store.dispatch) => {
    const data = await getPosts(`https://api.kinopoisk.dev/v1.4/movie/${id}`);
    return dispatch(showFilmById(data));
  };
