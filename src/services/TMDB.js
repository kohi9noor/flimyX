// TMDB.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.TMDB_KEY || "478ef2d7086b81e9d97b7be952bfe2f3";
const page = 10;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builders) => ({
    //* Get Genres
    getGenres: builders.query({
      query: () => {
        return `genre/movie/list?api_key=${tmdbApiKey}`;
      },
    }),
    //* Get Movies by [Type]
    getMovies: builders.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // search movies by query
        if (searchQuery)
          return `/search/movie?query=${searchQuery}&api_key=${tmdbApiKey}&page=${page}`;

        // get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "string")
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;

        // get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "number")
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        // get popular movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // *Get Movie by id
    getMovie: builders.query({
      query: (id) => {
        return `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`;
      },
    }),
    //  get User specific list list
    getList: builders.query({
      query: ({ listName, accountId, sessionId, page }) => {
        return `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`;
      },
    }),

    // get user specific lists
    getRecommendations: builders.query({
      query: ({ movie_id, list }) => {
        return `movie/${movie_id}/${list}?api_key=${tmdbApiKey}`;
      },
    }),
    getActors: builders.query({
      query: (id) => {
        return `person/${id}?api_key=${tmdbApiKey}`;
      },
    }),
    getMoviesByActorId: builders.query({
      query: ({ id, page }) => {
        return `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});
export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
