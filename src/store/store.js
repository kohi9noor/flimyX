import { configureStore } from "@reduxjs/toolkit";

import HomeSlice from "./HomeSlice";

export const store = configureStore({
  reducer: {
    home: HomeSlice,
  },
});
