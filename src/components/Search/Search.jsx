import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";
import { searchMovie } from "../../features/currentGenreOrCategory";

const Search = () => {
  const classes = useStyles();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };
  if (location.pathname != "/") return null;
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
