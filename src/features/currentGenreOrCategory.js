import { createSlice } from "@reduxjs/toolkit";

export const genreOrCateGory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreOrCateGoryName: " ",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload);
      // state.genreOrCateGoryName = action
    },
  },
});

export const { selectGenreOrCategory } = genreOrCateGory.actions;

export default genreOrCateGory.reducer;
