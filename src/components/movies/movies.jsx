import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";

const Movies = () => {
  const [page, setPage] = useState(1);

  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));
  const numberOfMovies = lg ? 17 : 19;

  if (isFetching) {
    return (
      <Box justifyContent="center" display="flex">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) return "An error has occured.";
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
