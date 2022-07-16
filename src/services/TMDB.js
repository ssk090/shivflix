import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* To Get Genre
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* To Get Movies
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjEyY2ZmYzJkNzMwNTU1MDNkYTY0MWNmNDE3ZDg5MyIsInN1YiI6IjYyZDA1YjkwNmJlYWVhMDA1NTNlZmI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b2oYICW7Nv0nR1lYS8IqQ0C96eeeTPaTvKjTTGIxJ9o
