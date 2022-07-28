import React, { useContext, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";
import {
  searchMovie,
  selectGenreOrCategory,
} from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
import { fetchToken } from "../utils";
import { useNavigate } from "react-router-dom";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: "bc0042583ac2acff9d51612afbd94ddc2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g?.name?.toLowerCase() === genreOrCategory?.toLowerCase()
          );
          console.log("foundGenre:", foundGenre);
          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre?.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          window.location.href = "/";
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
