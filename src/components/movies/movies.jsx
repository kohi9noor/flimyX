// components/Movies.js
import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../index";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  console.log(data);
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies that match that name
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) {
    return "An error has occured";
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
