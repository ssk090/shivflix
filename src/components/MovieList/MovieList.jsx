import React from "react";
import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";
import useStyles from "./styles";

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.moviesContainer}>
        {movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;