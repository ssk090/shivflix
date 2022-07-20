import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { MovieList, Pagination } from "..";

import { useGetMoviesQuery } from "../../services/TMDB";
import { useSelector } from "react-redux";

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
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
