import { Grid } from "@mui/material";
import useStyles from "./style";
import { Movie } from "../index";
const MovieList = ({ movies }) => {
  const classses = useStyles();

  return (
    <>
      <Grid container className={classses.moviesContainer}>
        {movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
