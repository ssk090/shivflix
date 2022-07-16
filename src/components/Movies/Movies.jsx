import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { MovieList } from "..";

import { useGetMoviesQuery } from "../../services/TMDB";
import { useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
  });

  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress size={"4rem"} />
      </Box>
    );
  }

  if (data && !data.results.length) {
    return (
      <Box display={"flex"} alignItems={"center"} mt="20px">
        <Typography variant="h4">
          No Movies that match that name.
          <br />
          Please search for something else
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
