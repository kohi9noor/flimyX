// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
