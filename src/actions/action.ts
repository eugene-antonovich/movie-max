import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../helpers/get-posts";
export const openModalCard = () => ({
  type: "OPEN_MODAL_CARD",
});

export const closeModalCard = () => ({
  type: "CLOSE_MODAL_CARD",
});

export const homePage = createAsyncThunk(
  "SHOW_HOME",
  async () => {
   const data = await  getPosts(`https://api.kinopoisk.dev/v1.4/movie/`)
   return data
  }
);

export const fetchUserById = createAsyncThunk(
   "SHOW_POST",
   async (cardId: string) => {
    const data = await  getPosts(`https://api.kinopoisk.dev/v1.4/movie/${cardId}`)
    return data
   }
);

// export const addTenMovies = createAsyncThunk(
//   "ADD_POSTS",
//   async (count: any) => {
//    const data = await  getPosts(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${count}`)
//    return data
//   }
// );
